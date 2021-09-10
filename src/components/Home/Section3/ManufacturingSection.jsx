import React from "react";
import "./ManufacturingSection.css";
import Button from "../../Button/Button";
import img1 from "../../../images/box_img1.jpg";
import img2 from "../../../images/box_img2.jpg";
import img3 from "../../../images/box_img3.jpg";
import img4 from "../../../images/box_img4.jpg";
import { NavLink } from "react-router-dom";

const ManufacturingSection = () => {
  return (
    <div className="home_manufacturing">
      <div className="manufacturing_container">
        <div className="manufacturing_text">
          <h1>
            THERAPEUTIC SEGMENTS BEING MANUFACTURED AT EPOXY LIFE SCIENCES
          </h1>
        </div>
        <div className="manufacturing_box">
          <div className="box">
            <div className="imgbox">
              <img src={img1} alt="image1" />
            </div>
          </div>
          <div className="box">
            <div className="imgbox">
              <img src={img2} alt="image2" />
            </div>
          </div>
          <div className="box">
            <div className="imgbox">
              <img src={img3} alt="image3" />
            </div>
          </div>
          <div className="box">
            <div className="imgbox">
              <img src={img4} alt="image4" />
            </div>
          </div>
        </div>
        <div className="manufacturing_button">
          <NavLink to="/products">
            <Button text="Our Services" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ManufacturingSection;
