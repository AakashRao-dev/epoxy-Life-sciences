import React from "react";
import "./ManufacturingSection2.css";
import img1 from "../../../images/quaCon.jpg";
import img2 from "../../../images/qualass.jpg";

const ManufacturingSection2 = () => {
  return (
    <div className="Manufacturing_Section2">
      <div className="Manufacturing_Section2_container">
        {/* Box---1 */}
        <div className="manufacturing_Section2_box">
          <div className="Manufacturing_row">
            <div className="manufacturing_col50">
              <div className="manufacturing_col50_imgbox">
                <img src={img1} alt="" />
              </div>
            </div>
            <div className="manufacturing_col50">
              <div className="manufacturing_Section2_text">
                <h1>Quality Assurancee</h1>
                <p>
                  The Quality Assurance team owns our QMS. This team ensures
                  quality is built every operation carried out at BSV’s
                  manufacturing facilities through
                </p>
                <ul>
                  <li>Quality Management System & Documentation</li>
                  <li>Qualification & Validation Section</li>
                  <li>In-process Quality Assurance (IPQA)</li>
                  <li>Analytical Quality Assurance</li>
                  <li>Training & Compliance</li>
                  <li>Developmental Quality Assurance (DQA)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Box--2 */}
        <div className="manufacturing_Section2_box">
          <div className="Manufacturing_row">
            <div className="manufacturing_col50">
              <div className="manufacturing_col50_imgbox">
                <img src={img2} alt="" />
              </div>
            </div>
            <div className="manufacturing_col50">
              <div className="manufacturing_Section2_text">
                <h1>Quality Control</h1>
                <p>
                  The Quality Control system is seamlessly integrated into every
                  stage of the manufacturing process. Our aboratory is equipped
                  with sophisticated instruments and& approved technical
                  employees that ensure a highly efficient quality control
                  process. The QC lab includes:
                </p>
                <ul>
                  <li>Instrumentation laboratory</li>
                  <li>Chemical laboratory (Wet Analysis)</li>
                  <li>Packaging material testing laboratory</li>
                  <li>Biological testing laboratory</li>
                  <li>Microbiological testing laboratory</li>
                  <li>Documentation section</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManufacturingSection2;
