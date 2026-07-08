import dentalBg from "../assets/hero.png";

function Hero() {
  return (
    <section
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1600')",
      }}
    >
      <div className="bg-white/70 border border-white/40 rounded-2xl p-10 max-w-4xl w-[90%] text-center shadow-2xl">
        <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight">
          Creating Healthy Smiles That Last a Lifetime
        </h1>

        <p className="mt-6 text-lg text-gray-700">
          Professional dental care with experienced dentists and modern
          technology.
        </p>

        <div className="mt-8 flex justify-center">
          <button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition duration-300">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;