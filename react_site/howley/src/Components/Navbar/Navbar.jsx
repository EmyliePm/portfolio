import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/letter-p.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      {" "}
      <img src={logo} alt="logo" class="logo"></img>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Services</li>
        <li>Testimonials</li>
        <li>Client Area</li>
        <li>Log In</li>
        <li>
          <button class="btn">Contact Us</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
