import { useState } from "react";

function DoctorCard() {
  const [showMore, setShowMore] = useState(false);
  return (
    <div>
      <h2>Dr. Anil Shrestha</h2>
      <p>Prosthodontist & Implant Dentist</p>

      <button
  onClick={() => setShowMore(!showMore)}
  className="mt-4 text-pink-600 font-semibold hover:underline"
>
  {showMore ? "Show Less" : "Click here for more info"}
</button>
{showMore && (
  <div className="mt-4">
    <h3>Education</h3>
    <p>BDS – Kathmandu University</p>
    <p>MDS – Prosthodontics & Implant Dentistry</p>

    <h3 className="mt-4">Experience</h3>
    <p>10+ years of experience</p>

    <h3 className="mt-4">Services</h3>
    <ul>
      <li>Dental Implants</li>
      <li>Smile Design</li>
      <li>Crowns & Bridges</li>
    </ul>
  </div>
)}
    </div>
  );
}

export default DoctorCard;