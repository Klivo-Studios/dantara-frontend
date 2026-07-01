function AboutPreview() {
  return (
    <section className="bg-pink-100 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">

          <div>
            <h2 className="text-4xl font-bold mb-6">
              Thousands trust us for their smiles
            </h2>

            <p className="text-gray-700 leading-relaxed">
              For over 15 years, we have been helping patients achieve
              healthier, brighter smiles through expert dental care,
              advanced treatments, and a commitment to comfort at every
              visit. Thousands of patients trust us to protect and
              enhance their oral health with personalized care tailored
              to their needs.
            </p>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800"
              alt="Dental Treatment"
              className="rounded-2xl w-full"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutPreview;