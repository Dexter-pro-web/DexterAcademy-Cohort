import { useEffect } from "react";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import PartnersSlider from "./components/Partner";
import Testimonials from "./components/Testimonials";
import PaymentPlans from "./components/PaymentPlans";
import Course from "./components/Course";
import Curriculum from "./components/Curriculum";
import Why from "./components/Why";
import Benefits from "./components/Benefit";
import Navbar from "./components/Navbar.js";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 700,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="App">
      <Navbar/>
      <Hero />
      <PartnersSlider />
      <Why />
      <Course />
      <Benefits />
      <PaymentPlans />
      <Testimonials />
      <Curriculum />
      <Footer />
    </div>
  );
}

export default App;
