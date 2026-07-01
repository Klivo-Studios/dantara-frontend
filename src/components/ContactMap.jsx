function ContactMap() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-10">
          Visit Our Clinic
        </h2>

        <div className="rounded-2xl overflow-hidden shadow-lg">

          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Kathmandu,Nepal&output=embed"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>

        </div>

      </div>
    </section>
  );
}

export default ContactMap;