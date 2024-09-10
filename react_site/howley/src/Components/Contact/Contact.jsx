import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/messenger.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} />
        </h3>
        <p>
          Feel free to reach out through our contact form or find our contact
          information below.
        </p>
        <ul>
          <li>
            {" "}
            <img src={mail_icon} />
            admin@paulhowley.co.uk
          </li>
          <li>
            <img src={phone_icon} />
            01226 205154
          </li>
          <li>
            <img src={location_icon} />
            Paul Howley & Co <br />
            42 Pitt Street <br /> Barnsley <br /> S70 1BB
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          ></input>
          <label>Phone Number</label>
          <input
            type="tell"
            name="phone"
            placeholder="Enter your phone number"
            required
          />
          <label>Write your message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit <img src={white_arrow} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
