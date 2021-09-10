import React from "react";
import "./QualitySection.css";
import { NavLink } from "react-router-dom";
import Button from "../../Button/Button";

const QualitySection = () => {
  return (
    <div className="home_quality">
      <div className="quality_container">
        <div className="quality_text">
          <h1>Quality Control</h1>
          <div className="quality_paragraph">
            <p>
              Epoxy Life Sciences follows good Manufacturing, laboratory and
              documentation practices that ensure consistent high quality
              results.
            </p>
            <p>
              Our state of the art analytical facilities monitor & maintain
              strict quality of our products, processes and services,
              consistently meeting USP and other national and international
              quality standards.
            </p>
          </div>
        </div>
        <div className="button_quality">
          <NavLink to="/manufacturing" className="button_link">
            <Button text="Learn More" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default QualitySection;
