function Benefits() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left Side */}
          <div>
            <ul className="space-y-4 text-2xl font-semibold">

              <li>✅ Teeth Whitening</li>

              <li>✅ Stain Removal</li>

              <li>✅ Natural-Looking Results</li>

              <li>✅ Safe & Painless Procedure</li>

              <li>✅ Performed by Experienced Dentists</li>

            </ul>
          </div>

          {/* Right Side */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800"
              alt="Smile"
              className="w-full rounded-lg"
            />
          </div>

        </div>

      </div>
    </section>
  );
}

export default Benefits;