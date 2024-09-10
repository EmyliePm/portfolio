import React from "react";
import "./Services.css";
import play_icon from "../../assets/play-icon.png";
import service_img from "../../assets/pexels-mohammad-danish-290641-891059.jpg";

const Services = () => {
  return (
    <div className="services">
      <div className="services-left">
        <img src={service_img} alt="play_icon" className="service_img"></img>
        <img src={play_icon} alt="play_icon" className="play_icon"></img>
      </div>
      <div className="services-right">
        <h3>Services We Offer</h3>
        <h2>Invaluable financial insights and solutions</h2>
        <p>
          Providing exceptional services by offering expert financial analysis,
          strategic tax planning, and personalized advice that streamline
          business operations and maximize financial success.
        </p>
        <p>
          From audits, book-keeping and financial services such as pension and
          investments to payroll, tax and VAT we provide trustworthy, efficient
          service for your company.
        </p>
        <p>
          With over 40 services on offer, we encourage you to book a free
          consultation with us, or request a callback. Click here to find out
          more.
        </p>
      </div>
    </div>
  );
};

export default Services;
