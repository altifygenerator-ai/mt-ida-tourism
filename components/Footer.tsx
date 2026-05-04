export default function Footer() {
  return (
    <footer className="bg-[#2d2a26] text-white mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-3">
        
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Mount Ida Tourism</h3>
          <p className="text-sm text-white/80">
            Discover Mount Ida, Arkansas — from crystal mines and Lake Ouachita
            to quiet cabins, scenic drives, and the Ouachita Mountains.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Explore</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/things-to-do" className="hover:underline">Things To Do</a></li>
            <li><a href="/local-business" className="hover:underline">Local Businesses</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact CTA */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Get Listed</h3>
          <p className="text-sm text-white/80 mb-4">
            Own a local business in Mount Ida? Get featured and connect with
            visitors planning trips to the area.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-black px-4 py-2 rounded-md text-sm font-medium"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 text-center text-sm text-white/70 py-6 space-y-4">

        <a
          href="https://buy.stripe.com/aFa4gz7By3qv67T8BX7N602"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[color:var(--color-accent)] text-white px-5 py-2 rounded-md font-medium shadow hover:opacity-90 transition"
        >
          ❤️ Support Local Visibility
        </a>

        <div>
          © {new Date().getFullYear()} Mount Ida Tourism. All rights reserved.
        </div>

        <div className="text-white/50">
          Site by{" "}
          <a
            href="https://hometownwebservicesar.cc"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition underline"
          >
            Hometown Web Services AR
          </a>
        </div>

      </div>
    </footer>
  )
}