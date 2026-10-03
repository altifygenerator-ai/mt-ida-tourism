type RateBucket = {
  count: number;
  resetAt: number;
};

type GlobalFormSecurityState = typeof globalThis & {
  __naturalStateFormRate?: Map<string, RateBucket>;
};

const globalState = globalThis as GlobalFormSecurityState;
const rateBuckets =
  globalState.__naturalStateFormRate ??
  (globalState.__naturalStateFormRate = new Map<string, RateBucket>());

const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT = 5;
const MIN_FILL_MS = 1200;
const MAX_FORM_AGE_MS = 4 * 60 * 60 * 1000;
const MAX_PAYLOAD_CHARS = 12000;
const MAX_URLS = 4;

function text(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function getClientIp(request: Request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip")?.trim() ||
    ""
  );
}

function isCrossSite(request: Request) {
  const fetchSite = request.headers.get("sec-fetch-site");
  if (fetchSite === "cross-site") return true;

  const origin = request.headers.get("origin");
  if (!origin) return false;

  try {
    return new URL(origin).host !== new URL(request.url).host;
  } catch {
    return true;
  }
}

function exceedsRateLimit(request: Request) {
  const ip = getClientIp(request);
  if (!ip) return false;

  const now = Date.now();
  const key = `${new URL(request.url).pathname}:${ip}`;
  const current = rateBuckets.get(key);

  if (!current || current.resetAt <= now) {
    rateBuckets.set(key, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }

  current.count += 1;
  rateBuckets.set(key, current);
  return current.count > RATE_LIMIT;
}

function countUrls(value: string) {
  return (value.match(/(?:https?:\/\/|www\.)/gi) || []).length;
}

export type FormSecurityResult =
  | { ok: true }
  | { ok: false; silent: true }
  | { ok: false; silent: false; status: number; error: string };

export function checkFormSubmission(
  request: Request,
  body: Record<string, unknown>,
): FormSecurityResult {
  // Honeypots: real users never see or fill these fields.
  if (text(body.websiteUrl) || text(body.company)) {
    return { ok: false, silent: true };
  }

  // Browser forms on these sites send this timestamp when the form is shown.
  const startedAt = Number(body.formStartedAt);
  const age = Date.now() - startedAt;

  if (
    !Number.isFinite(startedAt) ||
    age < MIN_FILL_MS ||
    age > MAX_FORM_AGE_MS
  ) {
    return { ok: false, silent: true };
  }

  if (isCrossSite(request)) {
    return { ok: false, silent: true };
  }

  if (exceedsRateLimit(request)) {
    return { ok: false, silent: true };
  }

  const allText = Object.values(body)
    .filter((value) => typeof value === "string")
    .join("\n");

  if (allText.length > MAX_PAYLOAD_CHARS) {
    return {
      ok: false,
      silent: false,
      status: 413,
      error: "That submission is too large.",
    };
  }

  if (countUrls(allText) > MAX_URLS) {
    return { ok: false, silent: true };
  }

  return { ok: true };
}
