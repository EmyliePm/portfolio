import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import AboutUs from "./Components/AboutUs/AboutUs";
import Hero from "./Components/Hero/hero";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <AboutUs />
      </div>
    </div>
  );
};

export default App;
