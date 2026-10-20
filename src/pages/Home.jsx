import Hero from "../components/home/Hero";
import ServicesPreview from "../components/home/ServicesPreview";
import AboutPreview from "../components/home/AboutPreview";
import Benefits from "../components/home/Benefits";
import BookingSteps from "../components/home/BookingSteps";
import LocationPreview from "../components/home/LocationPreview";
import FinalCTA from "../components/home/FinalCTA";
function Home() {
  return (
    <div className="home-page">
      <Hero />
      <ServicesPreview />
      <AboutPreview />
      <Benefits />
      <BookingSteps />
      <LocationPreview />
      <FinalCTA />
    </div>
  );
}

export default Home;
