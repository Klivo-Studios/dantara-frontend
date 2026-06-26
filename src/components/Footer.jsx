function Footer() {
  return (
    <footer style={{ backgroundColor: "#D26C8D" }} className="text-white pt-14 pb-6 mt-20">
      
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* Left - Brand */}
        <div>
          <h2 className="text-2xl font-bold">
            Dantara Dental Clinic
          </h2>
          <p className="mt-3 text-sm text-white/90">
            Lalitpur, Kathmandu
          </p>
        </div>

        {/* Middle - Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">
            Contact
          </h3>

          <p className="text-sm text-white/90">
            📞 +977-9800000000
          </p>

          <p className="text-sm text-white/90 mt-2">
            📧 dantara.dent@gmail.com
          </p>
        </div>

        {/* Right - Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3">
            Follow Us
          </h3>

          <div className="flex gap-4 text-xl">
            <span className="cursor-pointer hover:scale-110 transition">📸</span>
            <span className="cursor-pointer hover:scale-110 transition">🌐</span>
            <span className="cursor-pointer hover:scale-110 transition">💬</span>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-white/30 pt-4 text-center text-sm text-white/80">
        © {new Date().getFullYear()} Dantara Dental Clinic. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;