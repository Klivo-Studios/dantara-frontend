import { Phone, Mail } from "lucide-react";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa6";

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

          <p className="text-sm text-white/90 flex items-center gap-2">
            <Phone size={16} /> +977-9800000000
          </p>

          <p className="text-sm text-white/90 mt-2 flex items-center gap-2">
            <Mail size={16} /> dantara.dent@gmail.com
          </p>
        </div>

        {/* Right - Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3">
            Follow Us
          </h3>

          <div className="flex gap-4 text-xl">
            <a href="#" aria-label="Instagram" className="cursor-pointer hover:scale-110 transition"><FaInstagram /></a>
            <a href="#" aria-label="Facebook" className="cursor-pointer hover:scale-110 transition"><FaFacebookF /></a>
            <a href="#" aria-label="TikTok" className="cursor-pointer hover:scale-110 transition"><FaTiktok /></a>
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