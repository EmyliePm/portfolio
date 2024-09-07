import React from "react";
import "./AboutUs.css";
import worker1 from "../../assets/clay-elliot-PF7mP2xCeQw-unsplash.jpg";
import worker2 from "../../assets/brooke-cagle-JBwcenOuRCg-unsplash.jpg";
import worker3 from "../../assets/bruce-mars-8YG31Xn4dSw-unsplash.jpg";

const AboutUs = () => {
  return (
    <div className="workers">
      <div className="worker">
        <img src={worker1} alt="worker"></img>{" "}
        <div className="caption">
          <p>Paul Bowden (FCCA, ACA, Bsc)</p>
        </div>
      </div>
      <div className="worker">
        <img src={worker2} alt="worker"></img>{" "}
        <div className="caption">
          <p>Paulita Berry (FCCA, MAAT)</p>
        </div>
      </div>
      <div className="worker">
        <img src={worker3} alt="worker"></img>{" "}
        <div className="caption">
          <p>Tim Ware (FCCA, Prince2, ILM)</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
