import React from "react";
import "./ContactForm.css";
import img from "../../../images/contact_img1.svg";

const ContactForm = () => {
  return (
    <div className="Contactform">
      <div className="Contactform_container">
        <div className="ContactForm_text">
          <h1>Have Some Questions !</h1>
          <p>Connect With us</p>
        </div>
        <div className="ContactForm_row">
          <div className="ContactFormcol50">
            <div className="ContactForm_imgbox">
              <img src={img} alt="" />
            </div>
          </div>
          <div className="ContactFormcol50">
            <div className="contactForm_form">
              <form action="#">
                <input type="name" name="name" placeholder="First Name" />
                <input type="name" name="name" placeholder="Last Name" />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                />
                <input type="text" placeholder="Phone No." />
                <input type="text" placeholder="Enter Your Subject" />
                <textarea
                  cols="10"
                  rows="5"
                  placeholder="Enter Your message"
                ></textarea>
                <input type="submit" value="Send" className="Send" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
