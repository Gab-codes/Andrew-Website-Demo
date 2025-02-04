import "./App.css";
import AboutMe from "./sections/About";
import ContactMe from "./sections/Contact";
import FAQ from "./sections/Faqs";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Services from "./sections/service";
import Testimonials from "./sections/Testimonial";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutMe />
      <Services />
      <Testimonials />
      <ContactMe />
      <FAQ />
      <Footer />
    </main>
  );
}

export default App;
