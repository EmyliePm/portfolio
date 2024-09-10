import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import AboutUs from "./Components/AboutUs/AboutUs";
import Hero from "./Components/Hero/hero";
import Title from "./Components/Title/title";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="About Us" title="Get to know us" />
        <AboutUs />
      </div>
    </div>
  );
};

export default App;
