type FindAPlaceBookingCTAProps = {
  heading: string;
  text: string;
  href: string;
  buttonLabel: string;
};

export default function FindAPlaceBookingCTA({
  heading,
  text,
  href,
  buttonLabel,
}: FindAPlaceBookingCTAProps) {
  return (
    <section
      className="section"
      aria-label="Find a Place Booking"
      style={{ paddingTop: "48px", paddingBottom: "48px" }}
    >
      <div className="container">
        <div
          className="relative overflow-hidden rounded-[30px] border p-7 shadow-xl md:p-10"
          style={{
            background:
              "linear-gradient(135deg, #173f31 0%, #28563f 58%, #8a653d 100%)",
            borderColor: "rgba(255,255,255,0.16)",
            color: "#ffffff",
            boxShadow: "0 22px 55px rgba(34, 49, 40, 0.16)",
          }}
        >
          <div
            className="absolute -right-20 -top-20 h-56 w-56 rounded-full"
            style={{ background: "rgba(255,255,255,0.08)" }}
          />

          <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div style={{ maxWidth: "760px" }}>
              <p
                className="mb-2 text-xs font-bold uppercase tracking-[0.22em]"
                style={{
                  marginTop: 0,
                  color: "rgba(255,255,255,0.68)",
                }}
              >
                Find a Place Booking
              </p>

              <h2
                className="font-semibold"
                style={{
                  margin: 0,
                  color: "#ffffff",
                  fontSize: "clamp(1.9rem, 3vw, 2.55rem)",
                  lineHeight: 1.08,
                }}
              >
                {heading}
              </h2>

              <p
                style={{
                  marginTop: "14px",
                  marginBottom: 0,
                  maxWidth: "680px",
                  color: "rgba(255,255,255,0.82)",
                  fontSize: "1rem",
                  lineHeight: 1.7,
                }}
              >
                {text}
              </p>
            </div>

            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-extrabold no-underline shadow-md transition hover:opacity-90"
              style={{
                color: "#173f31",
                fontFamily: "inherit",
                lineHeight: 1.25,
                whiteSpace: "nowrap",
              }}
            >
              {buttonLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
