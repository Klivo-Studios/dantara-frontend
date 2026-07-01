import { Star } from "lucide-react";

function Stats() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          <div>
            <h2 className="text-4xl font-bold text-pink-600">5000+</h2>
            <p>Happy Patients</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-pink-600">15+</h2>
            <p>Years Experience</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-pink-600">10+</h2>
            <p>Specialists</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-pink-600 flex items-center justify-center gap-1">
              4.9 <Star className="fill-pink-600 text-pink-600" size={28} />
            </h2>
            <p>Patient Rating</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Stats;