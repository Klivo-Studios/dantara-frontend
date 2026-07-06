import { useState } from "react";

function DoctorCard({
  name,
  description,
  image,
  reverse = false,
}) {
  return (
    <div
      className={`max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden
      flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } my-10`}
    >
      {/* Image */}
      <div className="md:w-1/2">
        <img
          src={image}
          alt={name}
          className="w-full h-[420px] object-cover"
        />
      </div>

      {/* Text */}
      <div className="md:w-1/2 flex flex-col justify-center p-10">
        <h2 className="text-3xl font-bold mb-5">
          {name}
        </h2>

        <p className="text-gray-600 leading-8">
          {description}
        </p>
      </div>
    </div>
  );
}

export default DoctorCard;