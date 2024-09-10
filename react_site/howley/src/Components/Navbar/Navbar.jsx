import React from "react";
import "./Navbar.css";
import logo from "../../assets/letter-p.png";

const Navbar = () => {
  return (
    <nav class="container">
      {" "}
      {/* Paul Howley & Co */}
      <img src={logo} alt="logo" class="logo"></img>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Services</li>
        <li>Resources</li>
        <li>News</li>
        <li>Client Area</li>
        <li>
          <button class="btn">Contact Us</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
