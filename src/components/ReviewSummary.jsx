import { Star } from "lucide-react";

function ReviewSummary() {
  const Stars = ({ count }) => (
    <div className="flex text-yellow-400">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );

  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-6">

        <div className="bg-white shadow-lg rounded-2xl p-8">

          <h2 className="text-2xl font-bold mb-6">
            Review Summary
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* Left Side */}
            <div className="space-y-4">

              <div>
                <Stars count={5} />
                <div className="bg-gray-200 h-3 rounded-full mt-2">
                  <div className="bg-yellow-400 h-3 rounded-full w-full"></div>
                </div>
              </div>

              <div>
                <Stars count={4} />
                <div className="bg-gray-200 h-3 rounded-full mt-2">
                  <div className="bg-yellow-400 h-3 rounded-full w-4/5"></div>
                </div>
              </div>

              <div>
                <Stars count={3} />
                <div className="bg-gray-200 h-3 rounded-full mt-2">
                  <div className="bg-yellow-400 h-3 rounded-full w-3/5"></div>
                </div>
              </div>

            </div>

            {/* Right Side */}
            <div className="text-center">

              <h3 className="text-6xl font-bold text-blue-700">
                4.9
              </h3>

              <p className="text-yellow-500 text-2xl mt-3 flex justify-center">
                <Stars count={5} />
              </p>

              <p className="mt-4 text-gray-600">
                Based on 9,769 Reviews
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ReviewSummary;