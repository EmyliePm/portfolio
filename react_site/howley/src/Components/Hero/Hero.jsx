import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Paul Howley & Co Chartered Certified Accountants</h1>
        <p>
          Welcome to Paul Howley & Co Your trusted fully chartered accounting
          partner dedicated to empowering local businesses with expert financial
          solutions and personalised service.
        </p>
        <button className="btn">
          <a href="https://www.paulhowley.co.uk//why_us/meet_the_team.php">
            Explore More
          </a>
          <img src={dark_arrow} alt="arrow"></img>
        </button>
      </div>
    </div>
  );
};

export default Hero;
