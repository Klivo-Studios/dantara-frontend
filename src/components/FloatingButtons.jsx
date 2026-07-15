import { Link } from "react-router-dom";
import {LucidePhone, Calendar1Icon} from "lucide-react";

function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">

      {/* Call Button */}
      <a
        href="tel:+9779800000000"
        className="bg-pink-600 hover:bg-pink-700 text-white p-4 rounded-full shadow-lg transition"
      >
        <LucidePhone className="w-5 h-5"/> 
      </a>

      {/* Book Button */}
      <a
        href="/contact"
        className="bg-pink-600 hover:bg-pink-700 text-white p-4 rounded-full shadow-lg transition"
      >
        <Calendar1Icon className="w-5 h-5 justify-center" />
      </a>

    </div>
  );
}

export default FloatingButtons;