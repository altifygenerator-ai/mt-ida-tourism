import { NextResponse, type NextRequest } from "next/server";

const adminEmail = "altifygenerator@gmail.com";

function unauthorized() {
  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Mount Ida Admin"',
    },
  });
}

function parseBasicAuth(value: string | null) {
  if (!value?.startsWith("Basic ")) return null;

  try {
    const decoded = atob(value.slice(6));
    const separator = decoded.indexOf(":");

    if (separator === -1) return null;

    return {
      username: decoded.slice(0, separator),
      password: decoded.slice(separator + 1),
    };
  } catch {
    return null;
  }
}

export function proxy(request: NextRequest) {
  const secret = process.env.MOUNT_IDA_ADMIN_SECRET || process.env.NATURAL_STATE_ADMIN_SECRET;

  if (!secret) {
    return NextResponse.next();
  }

  const credentials = parseBasicAuth(request.headers.get("authorization"));

  if (credentials?.username === adminEmail && credentials.password === secret) {
    return NextResponse.next();
  }

  return unauthorized();
}

export const config = {
  matcher: ["/admin", "/admin/:path*"],
};
