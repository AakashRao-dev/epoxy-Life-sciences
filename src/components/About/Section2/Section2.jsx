import React from "react";
import Button from "../../Button/Button";
import "./Section2.css";
import img1 from "../../../images/About_img1.jpg";
import img2 from "../../../images/About_img2.jpg";
import img3 from "../../../images/About_img3.jpg";
import img4 from "../../../images/About_img4.jpg";

const Section2 = () => {
  return (
    <div className="about_section2">
      <div className="about_section2_container">
        <div className="box">
          <div className="column">
            <div className="col50">
              <div className="imgbox">
                <img src={img1} alt="" />
              </div>
            </div>
            <div className="col50">
              <div className="About_text">
                <h1>Who we are</h1>
                <p>
                  We are the largest privately owned and independent plasma
                  fractionator in the world. Our medicines are high-quality
                  human proteins sourced from human plasma and human cell lines.
                </p>
                <div className="about_section2_button">
                  <Button text="Know more about us" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Box--- 2 */}
        <div className="box">
          <div className="column">
            <div className="col50">
              <div className="About_text">
                <h1>Manufacturing</h1>
                <p>
                  We develop and manufacture medicines for patients in three
                  therapeutic areas: haematology, immunotherapy and critical
                  care.
                </p>
                <div className="about_section2_button">
                  <Button text="See what we do in epoxy" />
                </div>
              </div>
            </div>
            <div className="col50">
              <div className="imgbox">
                <img src={img2} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* Box --- 3 */}
        <div className="box">
          <div className="column">
            <div className="col50">
              <div className="imgbox">
                <img src={img3} alt="" />
              </div>
            </div>
            <div className="col50">
              <div className="About_text">
                <h1>Research & Development</h1>
                <p>
                  We carry out pre-clinical and clinical research to develop new
                  products and ensure that they are safe to use.
                </p>
                <div className="about_section2_button">
                  <Button text="Learn what we do in R&D" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Box---4 */}
        <div className="box">
          <div className="column">
            <div className="col50">
              <div className="About_text">
                <h1>People at Epoxy</h1>
                <p>
                  We are the largest privately owned and independent plasma
                  fractionator in the world. Our medicines are high-quality
                  human proteins sourced from human plasma and human cell lines.
                </p>
                <div className="about_section2_button">
                  <Button text="Our people at Epoxy" />
                </div>
              </div>
            </div>
            <div className="col50">
              <div className="imgbox">
                <img src={img4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
