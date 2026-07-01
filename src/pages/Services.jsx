import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";

import generalImg from "../assets/services/general.jpg";
import pedodontistImg from "../assets/services/pedodontist.jpg";
import endodontistImg from "../assets/services/endodontist.jpg";
import orthodontistImg from "../assets/services/orthodontist.jpg";
import periodontistImg from "../assets/services/periodontist.jpg";
import prosthodontistImg from "../assets/services/prosthodontist.jpg";
import oralImg from "../assets/services/oral.jpg";

import ServiceCard from "../components/ServiceCard";

function Services() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-[#D26C8D] text-white text-center py-20">
        <h1 className="text-4xl font-bold">
          Caring for your teeth?
        </h1>

        <p className="text-2xl mt-3">
          Your journey to a perfect smile begins here.
        </p>
      </section>

      <div className="bg-gray-100 py-10">

        <ServiceCard
  title="General Dentist"
  nepaliText="सामान्य दन्त चिकित्सकले नियमित दाँत परीक्षण, सफाइ तथा मुख स्वास्थ्य सम्बन्धी सेवा प्रदान गर्छन्।"
  image={generalImg}
  points={[
    "Provides routine dental check-ups",
    "Professional teeth cleaning",
    "Treats cavities",
    "Tooth extraction when necessary"
  ]}
/>

        <ServiceCard
  title="Pedodontist"
  nepaliText="बालबालिकाको दाँत तथा मुख स्वास्थ्यको विशेष उपचार गर्ने विशेषज्ञ चिकित्सक।"
  image={pedodontistImg}
  reverse={true}
  points={[
    "Children's dental care",
    "Growth monitoring",
    "Treats cavities",
    "Child-friendly treatments"
  ]}
/>

        <ServiceCard
  title="Endodontist"
  nepaliText="दाँतको भित्री भाग तथा रुट क्यानल उपचारमा विशेषज्ञ चिकित्सक।"
  image={endodontistImg}
  points={[
    "Root canal treatment",
    "Tooth pain diagnosis",
    "Preserves natural teeth",
    "Treats pulp infections"
  ]}
/>

        <ServiceCard
  title="Orthodontist"
  nepaliText="बाङ्गा दाँत तथा जबडाको समस्या सुधार गर्ने विशेषज्ञ।"
  image={orthodontistImg}
  reverse={true}
  points={[
    "Braces",
    "Aligners",
    "Bite correction",
    "Smile improvement"
  ]}
/>

        <ServiceCard
  title="Periodontist"
  nepaliText="गिजा तथा दाँतलाई समर्थन गर्ने संरचनाको उपचार गर्ने विशेषज्ञ।"
  image={periodontistImg}
  points={[
    "Treats gum disease",
    "Gum surgery",
    "Implant support",
    "Prevents tooth loss"
  ]}
/>

        <ServiceCard
  title="Prosthodontist"
  nepaliText="हराएका वा क्षतिग्रस्त दाँत पुनःस्थापना गर्ने विशेषज्ञ।"
  image={prosthodontistImg}
  reverse={true}
  points={[
    "Crowns",
    "Bridges",
    "Dentures",
    "Smile restoration"
  ]}
/>

        <ServiceCard
  title="Oral Surgeon"
  nepaliText="मुख, जबडा तथा अनुहार सम्बन्धी शल्यक्रिया गर्ने विशेषज्ञ।"
  image={oralImg}
  points={[
    "Wisdom tooth extraction",
    "Jaw surgery",
    "Facial trauma treatment",
    "Oral surgical procedures"
  ]}
/>
      </div>

      <Footer />
      <FloatingButtons />
    </>
  );
}

export default Services;