import Hero from './components/Hero';
import Footer from './components/Footer';
import PartnersSlider from './components/Partner';
import Testimonials from './components/Testimonials';
import PaymentPlans from './components/PaymentPlans';
import Course from './components/Course';
import Curriculum from './components/Curriculum';
import Why from './components/Why';
import Benefits from './components/Benefit';


function App() {
  return (
    <div className="App">
      <Hero/>
      <PartnersSlider/>
      <Why/>
      <Course/>
      <Benefits/>
      <PaymentPlans/>
      <Testimonials/>
      <Curriculum/>
      <Footer/>
    </div>
  );
}

export default App;
