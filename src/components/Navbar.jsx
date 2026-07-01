import { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
  { to: "/shop", label: "Dental Shop" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center px-6 md:px-8 py-3">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img
            src={logo}
            alt="Dantara Dental Clinic"
            className="h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className="hover:text-[#D26C8D] transition-colors duration-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side: Book Now + hamburger */}
        <div className="flex items-center gap-3 shrink-0">
          <button className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors">
            Book Now
          </button>

          <button
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="md:hidden grid place-items-center w-10 h-10 rounded-lg text-gray-700 hover:bg-pink-50 transition-colors"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <ul className="md:hidden flex flex-col gap-1 px-6 pb-4 font-medium text-gray-700 border-t border-gray-100">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                onClick={() => setOpen(false)}
                className="block py-3 hover:text-[#D26C8D] transition-colors duration-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
