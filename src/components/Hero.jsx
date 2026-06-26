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
      <div className="text-center bg-white/70 p-8 rounded-xl max-w-4xl">
        <h1 className="text-5xl font-bold text-black">
          Creating Healthy Smiles That Last a Lifetime
        </h1>

        <p className="mt-6 text-lg text-gray-700">
          Professional dental care with experienced dentists and modern technology.
        </p>

        <button className="mt-8 bg-pink-600 text-white px-6 py-3 rounded-lg">
          Book Now
        </button>
      </div>
    </section>
  );
}

export default Hero;