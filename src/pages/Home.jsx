import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import AboutPreview from "../components/AboutPreview";
import HappySmiles from "../components/HappySmiles";
import Benefits from "../components/Benefits";
import ReviewSummary from "../components/ReviewSummary";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutPreview />
      <Stats />
      <HappySmiles />
      <Benefits />
      <ReviewSummary />
      <Footer />
      <FloatingButtons />
    </>
  );
}

export default Home;