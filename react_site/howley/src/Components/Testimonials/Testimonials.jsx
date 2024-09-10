import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user1 from "../../assets/linkedin-sales-solutions-pAtA8xe_iVM-unsplash.jpg";
import user2 from "../../assets/eric-muhr-Visn_MtNX-s-unsplash.jpg";
import user3 from "../../assets/mina-rad-K9T9hdf4PmI-unsplash.jpg";
import user4 from "../../assets/dillon-wanner-VdWI7XhTINg-unsplash.jpg";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  return (
    <div className="testimonials">
      <img src={next_icon} className="next-btn" onClick={slideForward} />
      <img src={back_icon} className="back-btn" onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img className="user-img" src={user1}></img>
                <div>
                  <h3>John Smith</h3>
                  <span>JS Carpets, Hull</span>
                </div>
              </div>
              <p>
                Choosing Paul Howley & Co as chartered accountants for my local
                business was on of the best decisions I made financially. They
                are extremely supportive and comminted to help with all my
                financial needs.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img className="user-img" src={user2}></img>
                <div>
                  <h3>Jason Fort</h3>
                  <span>Topfort Home Farm, Dewsbury</span>
                </div>
              </div>
              <p>
                Paul Howley & Co help me with book-keeping, tax and buisness
                support. They are professional, down to earth guys that are
                available to contact all the time. They've helped me to raise
                finance on my farm.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img className="user-img" src={user3}></img>
                <div>
                  <h3>Reece Doe</h3>
                  <span>Doe Construction Ltd</span>
                </div>
              </div>
              <p>
                Paul Howley & Co's services with tax, VAT and payroll has saved
                me so much time and effort. I am able to focus more on the day
                to day running of my business because of their expertes.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img className="user-img" src={user4}></img>
                <div>
                  <h3>Dan Warner</h3>
                  <span>Pixel Tatoos</span>
                </div>
              </div>
              <p>
                Paul Howley & Co's services with tax, VAT and payroll has saved
                me so much time and effort. I am able to focus more on the day
                to day running of my business because of their expertes.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
import "./Testimonials.css";

export default Testimonials;
