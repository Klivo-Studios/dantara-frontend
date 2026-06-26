import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import male from "../assets/male.jpg";
import doctor from "../assets/doctor.jpg";
import female from "../assets/female.jpg";
import FAQ from "../components/FAQ";

function About() {
  const [showDoctor1, setShowDoctor1] = useState(false);
  const [showDoctor2, setShowDoctor2] = useState(false);
  const [showDoctor3, setShowDoctor3] = useState(false);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-[#D26C8D] text-white text-center py-20">
        <h1 className="text-5xl font-bold mb-4">
          About Dantara Dental Clinic
        </h1>

        <p className="text-xl">
          Providing quality dental care for healthy and confident smiles.
        </p>
      </section>

      {/* Who We Are */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-8 hover:text-pink-600 transition-colors duration-300">
          Who We Are
        </h2>

        <p className="text-lg text-gray-700 text-center leading-8">
          Dantara Dental Clinic is committed to providing comprehensive,
          patient-focused dental care using modern technology and experienced
          professionals. Our goal is to help patients achieve healthy,
          beautiful smiles through preventive, restorative and cosmetic
          treatments.
        </p>
      </section>

      {/* Doctor 1 */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-10 items-center bg-white p-8 rounded-2xl shadow-md hover:shadow-[0_10px_30px_rgba(210,108,141,0.4)] transition-all duration-300">

          <img
            src={male}
            alt="Doctor"
            className="rounded-xl"
          />

          <div>
            <h2 className="text-3xl font-bold mb-4">
              Dr. Anil Shrestha
            </h2>

            <p className="text-gray-700 leading-8">
              Dr. Anil Shrestha is a highly skilled dental professional
              specializing in Prosthodontics and Implant Dentistry. He is
              dedicated to restoring smiles and improving oral health with
              advanced treatment techniques.
            </p>

            <button
              onClick={() => setShowDoctor1(!showDoctor1)}
              className="mt-4 text-[#D26C8D] font-semibold hover:underline"
            >
              {showDoctor1 ? "Show Less" : "Click here for more info"}
            </button>

            {showDoctor1 && (
              <div className="mt-6 border-t pt-4 space-y-3 text-gray-700">
                <h3 className="font-bold text-lg">Education</h3>
                <ul className="list-disc ml-6">
                  <li>BDS – Kathmandu University</li>
                  <li>MDS – Prosthodontics & Implant Dentistry</li>
                </ul>

                <h3 className="font-bold text-lg">Experience</h3>
                <p>10+ years of experience in prosthodontics and implant dentistry.</p>

                <h3 className="font-bold text-lg">Services</h3>
                <ul className="list-disc ml-6">
                  <li>Dental Implants</li>
                  <li>Crowns & Bridges</li>
                  <li>Smile Makeovers</li>
                </ul>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Doctor 2 */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-10 items-center bg-white p-8 rounded-2xl shadow-md hover:shadow-[0_10px_30px_rgba(210,108,141,0.4)] transition-all duration-300">

          <div>
            <h2 className="text-3xl font-bold mb-4">
              Dr. Suman Karki
            </h2>

            <p className="text-gray-700 leading-8">
              Dr. Suman Karki specializes in Orthodontics and is passionate
              about helping patients achieve healthy, confident smiles through
              personalized treatment plans.
            </p>

            <button
              onClick={() => setShowDoctor2(!showDoctor2)}
              className="mt-4 text-[#D26C8D] font-semibold hover:underline"
            >
              {showDoctor2 ? "Show Less" : "Click here for more info"}
            </button>

            {showDoctor2 && (
              <div className="mt-6 border-t pt-4 space-y-3 text-gray-700">
                <h3 className="font-bold text-lg">Education</h3>
                <ul className="list-disc ml-6">
                  <li>BDS – Tribhuvan University</li>
                  <li>MDS – Orthodontics</li>
                </ul>

                <h3 className="font-bold text-lg">Experience</h3>
                <p>8+ years of experience in orthodontic treatments.</p>

                <h3 className="font-bold text-lg">Services</h3>
                <ul className="list-disc ml-6">
                  <li>Braces</li>
                  <li>Invisalign</li>
                  <li>Bite Correction</li>
                </ul>
              </div>
            )}
          </div>

          <img
            src={doctor}
            alt="Doctor"
            className="rounded-xl"
          />

        </div>
      </section>
            {/* Doctor 3 */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-10 items-center bg-white p-8 rounded-2xl shadow-md hover:shadow-[0_10px_30px_rgba(210,108,141,0.4)] transition-all duration-300">

          <img
            src={female}
            alt="Doctor"
            className="rounded-xl"
          />

          <div>
            <h2 className="text-3xl font-bold mb-4">
              Dr. Aashika Joshi
            </h2>

            <p className="text-gray-700 leading-8">
              Dr. Aashika Joshi specializes in Periodontics and Gum Health.
              She is committed to providing gentle, effective dental care and
              creating a comfortable experience for every patient.
            </p>

            <button
              onClick={() => setShowDoctor3(!showDoctor3)}
              className="mt-4 text-[#D26C8D] font-semibold hover:underline"
            >
              {showDoctor3 ? "Show Less" : "Click here for more info"}
            </button>

            {showDoctor3 && (
              <div className="mt-6 border-t pt-4 space-y-3 text-gray-700">
                <h3 className="font-bold text-lg">Education</h3>
                <ul className="list-disc ml-6">
                  <li>BDS – Kathmandu Medical College</li>
                  <li>MDS – Periodontics</li>
                </ul>

                <h3 className="font-bold text-lg">Experience</h3>
                <p>7+ years of experience in gum care and periodontal treatments.</p>

                <h3 className="font-bold text-lg">Services</h3>
                <ul className="list-disc ml-6">
                  <li>Gum Treatment</li>
                  <li>Scaling & Root Planing</li>
                  <li>Laser Gum Therapy</li>
                </ul>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-pink-50 py-16 mt-10">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-10 hover:text-pink-600 transition-colors duration-300">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-6 rounded-xl shadow-md hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(210,108,141,0.3)] transition-all duration-300">
              <h3 className="font-bold text-xl mb-3">
                Experienced Dentists
              </h3>

              <p>
                Skilled professionals providing expert dental care.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(210,108,141,0.3)] transition-all duration-300">
              <h3 className="font-bold text-xl mb-3">
                Modern Technology
              </h3>

              <p>
                Advanced equipment for accurate diagnosis and treatment.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(210,108,141,0.3)] transition-all duration-300">
              <h3 className="font-bold text-xl mb-3">
                Patient Focused
              </h3>

              <p>
                Comfortable and personalized care for everyone.
              </p>
            </div>

          </div>

        </div>
      </section>

      <FAQ />

      <Footer />
    </>
  );
}

export default About;