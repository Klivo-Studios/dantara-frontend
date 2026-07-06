import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaStar,
  FaCheckCircle,
} from "react-icons/fa";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#D26C8D" }} className="text-white pt-14 pb-6 mt-20">
      
      <div className="max-w-8xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* Left - Brand */}
        <div>
          <h2 className="text-4xl font-bold grid place-items-center">
            Dantara Dental Clinic
          </h2>
          <p className="mt-3 text-2xl text-white/90 grid place-items-center">
            Lalitpur, Kathmandu
          </p>
        </div>

        {/* Middle - Contact */}
        <div>
          <h3 className="text-2xl font-semibold mb-5 text-center">
            Contact
          </h3>

          <p className="flex items-center justify-center gap-3 text-2xl text-white/90">
            <FaPhoneAlt/>+977-9800000000
          </p>

          <p className="flex items-center justify-center gap-3 text-2xl text-white/90 mt-2">
            <FaEnvelope/>dantara.dent@gmail.com
          </p>
        </div>

        {/* Right - Social */}
        <div>
          <h3 className="text-2xl font-semibold mb-5 text-center">
            Follow Us
          </h3>

          <div className="flex justify-center items-center gap-6 text-2xl">
            <span className="cursor-pointer hover:scale-110 transition"><FaInstagram /></span>
            <span className="cursor-pointer hover:scale-110 transition"><FaFacebook /></span>
            <span className="cursor-pointer hover:scale-110 transition"><FaWhatsapp /></span>
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