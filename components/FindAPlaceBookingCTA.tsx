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
    <section className="section" aria-label="Find a Place Booking">
      <div className="container">
        <div
          className="relative overflow-hidden rounded-[30px] border p-7 shadow-xl md:p-10"
          style={{
            background:
              "linear-gradient(135deg, #183c2c 0%, #24533d 58%, #8a6338 100%)",
            borderColor: "rgba(255,255,255,0.16)",
          }}
        >
          <div
            className="absolute -right-20 -top-20 h-56 w-56 rounded-full"
            style={{ background: "rgba(255,255,255,0.08)" }}
          />

          <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-white/70">
                Find a Place Booking
              </p>
              <h2 className="text-3xl font-semibold leading-tight text-white md:text-4xl">
                {heading}
              </h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-white/85">
                {text}
              </p>
            </div>

            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-extrabold text-[#183c2c] no-underline shadow-md transition hover:opacity-90"
            >
              {buttonLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
