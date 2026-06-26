function ServiceCard({
  title,
  nepaliText,
  image,
  points,
  reverse,
}) {
  return (
    <div className="max-w-6xl mx-auto bg-white p-8 mb-8 rounded-2xl shadow-md hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(210,108,141,0.4)]">

      <h2 className="text-3xl font-bold text-center mb-3 rounded-2xl text-gray-800 hover:text-pink-600 transition-colors duration-300">
        {title}
      </h2>

      <p className="text-center text-gray-600 duration-300 mb-8 hover:text-pink-600">
        {nepaliText}
      </p>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        {reverse ? (
          <>
            <div>
              <ul className="space-y-3 text-gray-700">
                {points.map((point, index) => (
                  <li
                    key={index}
                    className="hover:text-pink-600 transition-colors duration-200"
                  >
                    • {point}
                  </li>
                ))}
              </ul>
            </div>

            <img
              src={image}
              alt={title}
              className="w-full h-64 object-cover rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(210,108,141,0.5)]"
/>
            
          </>
        ) : (
          <>
            <img
              src={image}
              alt={title}
              className="w-full h-64 object-cover rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(210,108,141,0.5)]"
            />

            <div>
              <ul className="space-y-3 text-gray-700">
                {points.map((point, index) => (
                  <li
                    key={index}
                    className="hover:text-pink-600 transition-colors duration-200"
                  >
                    • {point}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>

    </div>
  );
}

export default ServiceCard;