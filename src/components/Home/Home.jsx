import Header from "../Header/Header";
import Hero from "./Hero/Hero";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutSection from "./Section1/AboutSection";
import QualitySection from "./Section2/QualitySection";
import ManufacturingSection from "./Section3/ManufacturingSection";
import Philosophy from "./Section4/Philosophy";
import ContactSection from "./Section5/ContactSection";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <AboutSection />
      <QualitySection />
      <ManufacturingSection />
      <Philosophy />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;
