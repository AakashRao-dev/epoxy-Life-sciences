import React from "react";
import "./ContactHero1.css";
import image from "../../../images/edit.jpeg";

const ContactHero1 = () => {
  return (
    <div className="ContactHero1">
      <div className="ContactHero1_container">
        <div className="photo_div">
          <div className="img_box">
            <img src={image} alt="CEO of Epoxy Life Sciences" />
          </div>
          <div className="caption">
            <h3>CEO</h3>
            <h4>Ms. Khushi Goyal</h4>
            <h4>
              <a href="tel: 91 9111013756">Contact: 91 9111013756</a> <br />
              <a href="mailto: epoxylifesciences@gmail.com">
                Email: epxoylifesciences@gmail.com
              </a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero1;
