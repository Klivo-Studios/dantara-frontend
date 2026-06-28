import { Phone, CalendarDays } from "lucide-react";

function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">

      {/* Book Button - primary */}
      <a
        href="#book"
        className="group bg-pink-600 hover:bg-pink-700 text-white pl-4 pr-5 py-3 rounded-full shadow-lg shadow-pink-600/30 flex items-center gap-2 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-pink-600/40"
      >
        <span className="grid place-items-center w-8 h-8 rounded-full bg-white/20 group-hover:bg-white/30 transition">
          <CalendarDays size={18} />
        </span>
        Book Now
      </a>

      {/* Call Button - secondary */}
      <a
        href="tel:+9779800000000"
        className="group bg-white hover:bg-pink-50 text-pink-600 pl-4 pr-5 py-3 rounded-full shadow-lg ring-1 ring-pink-200 flex items-center gap-2 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
      >
        <span className="grid place-items-center w-8 h-8 rounded-full bg-pink-100 group-hover:bg-pink-200 transition">
          <Phone size={18} />
        </span>
        Make Call
      </a>

    </div>
  );
}

export default FloatingButtons;
