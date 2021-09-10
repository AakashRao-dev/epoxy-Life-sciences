import React from "react";
import Button from "../../Button/Button";
import { NavLink } from "react-router-dom";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <div className="Home_about">
      <div className="about_container">
        <div className="text">
          <h1>About Us</h1>
          <h2>Ranked Among the Top Compaines</h2>
          <div className="paragraph">
            <p>
              We say humanity beings with life we are willing to have
              co-ordinated approach to contribute to society beyond the
              medicines.
            </p>
            <p>
              Epoxy Life Sciences trying to deliver medicines that enable
              patients to live longer, healthier, happier & more active lives.
              We strive to have positively impact on the health of people around
              the world.
            </p>
          </div>
        </div>
        <div className="button_about">
          <NavLink to="/about" className="button_link">
            <Button text="About Epoxy" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
