import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import AboutUs from "./Components/AboutUs/AboutUs";
import Hero from "./Components/Hero/hero";
import Title from "./Components/Title/title";
import Services from "./Components/Services/Services";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="About Us" title="Get to know us" />
        <AboutUs />
        <Services />
        <Title subTitle="Testimonials" title="What Clients Say" />
        <Testimonials />
        <Title subTitle="Contact Us" title="Book a free consultation now!" />
        <Contact />
      </div>
    </div>
  );
};

export default App;
