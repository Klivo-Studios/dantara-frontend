import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md sticky top-0 z-50">

      {/* Logo */}
      <h2 className="text-2xl font-bold text-[#D26C8D]">
        Dantara Dental Clinic
      </h2>

      {/* Navigation Links */}
      <ul className="flex items-center gap-8 font-medium text-gray-700">

        <li>
          <Link
            to="/"
            className="hover:text-[#D26C8D] transition-colors duration-300"
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/services"
            className="hover:text-[#D26C8D] transition-colors duration-300"
          >
            Services
          </Link>
        </li>

        <li>
          <Link
            to="/about"
            className="hover:text-[#D26C8D] transition-colors duration-300"
          >
            About Us
          </Link>
        </li>

        <li>
          <Link
            to="/contact"
            className="hover:text-[#D26C8D] transition-colors duration-300"
          >
            Contact
          </Link>
        </li>

        <li>
          <Link
            to="/shop"
            className="hover:text-[#D26C8D] transition-colors duration-300"
          >
            Dental Shop
          </Link>
        </li>

      </ul>

      {/* Make Call Button */}
      <button className="bg-[#D26C8D] text-white px-5 py-2 rounded-lg hover:bg-pink-700 transition duration-300">
        Make Call
      </button>

    </nav>
  );
}

export default Navbar;