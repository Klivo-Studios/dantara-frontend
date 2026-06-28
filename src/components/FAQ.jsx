import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do I need to book an appointment before visiting?",
    answer:
      "Yes. We recommend booking an appointment to reduce waiting time and ensure the dentist is available.",
  },
  {
    question: "What dental services do you provide?",
    answer:
      "We provide teeth cleaning, fillings, root canal treatment, dental implants, braces, teeth whitening, crowns, and dentures.",
  },
  {
    question: "Is teeth whitening safe?",
    answer:
      "Yes. Professional teeth whitening performed by our dentists is safe and effective.",
  },
  {
    question: "Do you treat children?",
    answer:
      "Yes. We provide gentle dental care for children of all ages.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, cards, and popular digital payment methods.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-pink-50">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800 hover:text-pink-600 transition-colors duration-300">
          Frequently Asked Questions
        </h2>

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="mb-4 bg-white rounded-xl shadow"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-5 text-left font-semibold text-lg"
            >
              {faq.question}

              <span className="text-pink-600">
                {openIndex === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
              </span>
            </button>

            {openIndex === index && (
              <div className="px-5 pb-5 text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}

      </div>
    </section>
  );
}

export default FAQ;