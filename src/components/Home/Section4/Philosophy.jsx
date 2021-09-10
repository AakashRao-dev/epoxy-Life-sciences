import React from "react";
import img from "../../../images/philosophy_img.svg";
import "./Philosophy.css";

const Philosophy = () => {
  return (
    <div className="philosophy_home">
      <div className="philosophy_container">
        <div className="philosophy_row">
          <div className="philosophy_text">
            <h1>Philosophy</h1>
            <p>
              Innovation drives Growth. Sensitive to market need and commited to
              innovation, here at Epoxy life sciences. We focus on quality
              product manufacturing platforms, combining cutting-edge technology
              and the best minds in the business.
            </p>
          </div>
          <div className="philosophy_imgbox">
            <img src={img} alt="doctorimage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
