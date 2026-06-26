function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">

      {/* Call Button */}
      <a
        href="tel:+9779800000000"
        className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2 transition"
      >
        Make Call
      </a>

      {/* Book Button */}
      <a
        href="#book"
        className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2 transition"
      >
        Book Now 
      </a>

    </div>
  );
}

export default FloatingButtons;