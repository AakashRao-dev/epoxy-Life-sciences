import React from "react";
import Button from "../../Button/Button";
import "./ContactSection.css";
import { NavLink } from "react-router-dom";

const ContactSection = () => {
  return (
    <div className="contact_home">
      <div className="contact_container">
        <div className="contact_row">
          <div className="col50 white">
            <h1>Request Information</h1>
            <p>
              Enter your details and the reason for your request: we’ll contact
              you to provide all the assistance you need.
            </p>
            <div className="contact_button">
              <NavLink to="/contact" className="contact_button_link">
                <Button text="Contact Us" />
              </NavLink>
            </div>
          </div>
          <div className="col50 purple">
            <h1>Become a Partner</h1>
            <p>Choose the right partner to grow your business.</p>
            <div className="contact_button">
              <NavLink to="/contact" className="contact_button_link">
                <Button text="Contact Us" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
