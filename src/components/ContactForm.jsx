import tooth from "../assets/tooth.png";
import {
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaTooth,
} from "react-icons/fa";

function ContactForm() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="bg-[#EAF4FF] rounded-3xl p-10 shadow-lg">

          {/* Heading */}
          <div className="flex flex-col md:flex-row justify-between items-start mb-10">

            <div>

              <h2 className="text-5xl font-bold text-black">
                Send Us an Inquiry
              </h2>

              <div className="w-24 h-1 bg-black mt-3 mb-6 rounded-full"></div>

              <p className="text-gray-800 max-w-xl font-medium leading-6">
                Have a question about our dental services or need help
                booking an appointment? Fill out the form below and our
                team will get back to you as soon as possible.
              </p>

            </div>

            {/* Tooth Image */}
            <div className="mt-8 md:mt-0">
  <div className="w-40 h-40 rounded-full bg-blue-300 flex items-center justify-center shadow-lg overflow-hidden">
    <img
      src={tooth}
      alt="Tooth"
      className="w-full h-full object-cover"
    />
  </div>
</div>

          </div>

          {/* Form */}
          <form className="space-y-8">

            {/* Row 1 */}
            <div className="grid md:grid-cols-2 gap-10">

              {/* Full Name */}
              <div>
                <label className="font-semibold block mb-3">
                  Full Name
                </label>

                <div className="flex items-center bg-white rounded-lg px-4 border">

                  <FaUser className="text-gray-500 mr-3" />

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full py-3 outline-none"
                  />

                </div>
              </div>

              {/* Phone Number */}
              <div>

                <label className="font-semibold block mb-3">
                  Phone Number
                </label>

                <div className="flex items-center bg-white rounded-lg px-4 border">

                  <FaPhoneAlt className="text-gray-500 mr-3" />

                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full py-3 outline-none"
                  />

                </div>

              </div>

            </div>

            {/* Row 2 */}
            <div className="grid md:grid-cols-2 gap-10">

              {/* Email */}
              <div>

                <label className="font-semibold block mb-3">
                  Email Address
                </label>

                <div className="flex items-center bg-white rounded-lg px-4 border">

                  <FaEnvelope className="text-gray-500 mr-3" />

                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full py-3 outline-none"
                  />

                </div>

              </div>

              {/* Preferred Contact Method */}
              <div>

                <label className="font-semibold block mb-3">
                  Preferred Contact Method
                </label>

                <div className="flex items-center bg-white rounded-lg px-4 border">

                  <FaPhoneAlt className="text-gray-500 mr-3" />

                  <select className="w-full py-3 outline-none bg-transparent">

                    <option>Select an option</option>
                    <option>Phone Call</option>
                    <option>WhatsApp</option>
                    <option>Email</option>

                  </select>

                </div>

              </div>

            </div>

            {/* Row 3 */}
            <div>

              <label className="font-semibold block mb-3">
                Service Interested In
              </label>

              <div className="flex items-center bg-white rounded-lg px-4 border">

                <FaTooth className="text-gray-500 mr-3" />

                <select className="w-full py-3 outline-none bg-transparent">

                  <option>Select a service</option>
                  <option>General Dentistry</option>
                  <option>Dental Cleaning</option>
                  <option>Dental Filling</option>
                  <option>Root Canal Treatment</option>
                  <option>Teeth Whitening</option>
                  <option>Dental Implant</option>
                  <option>Orthodontics (Braces)</option>
                  <option>Periodontal Treatment</option>
                  <option>Pediatric Dentistry</option>
                  <option>Oral Surgery</option>

                </select>

              </div>

            </div>
                        {/* Row 4 */}
            <div className="grid md:grid-cols-2 gap-10">

              {/* Appointment Date */}
              <div>

                <label className="font-semibold block mb-3">
                  Preferred Appointment Date
                </label>

                <input
                  type="date"
                  className="w-full bg-white border rounded-lg px-4 py-3 outline-none"
                />

              </div>

              {/* Preferred Time */}
              <div>

                <label className="font-semibold block mb-3">
                  Preferred Time
                </label>

                <select className="w-full bg-white border rounded-lg px-4 py-3 outline-none">

                  <option>Select a time</option>
                  <option>09:00 AM</option>
                  <option>10:00 AM</option>
                  <option>11:00 AM</option>
                  <option>12:00 PM</option>
                  <option>01:00 PM</option>
                  <option>02:00 PM</option>
                  <option>03:00 PM</option>
                  <option>04:00 PM</option>
                  <option>05:00 PM</option>

                </select>

              </div>

            </div>

            {/* Row 5 */}
            <div>

              <label className="font-semibold block mb-3">
                Message / Inquiry
              </label>

              <textarea
                rows="5"
                placeholder="Tell us how we can help you..."
                className="w-full bg-white border rounded-lg px-4 py-3 outline-none resize-none"
              ></textarea>

            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white text-2xl font-bold py-4 rounded-lg rounded-xl transition duration-300"
            >
              Send Inquiry
            </button>

            <p className="text-center text-sm font-semibold text-gray-700">
              We'll contact you shortly to discuss your dental needs and
              schedule an appointment if required.
            </p>

          </form>

        </div>

      </div>
    </section>
  );
}

export default ContactForm;