function ContactHero() {
  return (
    <section
      className="relative h-[500px] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1600')",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative h-full flex items-center justify-center text-center px-6">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Friendly Care &
            <br />
            Professional Dentistry,
            <br />
            One Message Away.
          </h1>

          <p className="mt-6 text-xl text-white">
            We'd love to hear from you.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactHero;