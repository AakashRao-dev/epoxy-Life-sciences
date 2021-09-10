import React from "react";
import "./ProductsSection1.css";
import Button from "../../Button/Button";
import img1 from "../../../images/product_img1.jpg";
import img2 from "../../../images/product_img2.jpg";

const ProductsSection1 = () => {
  return (
    <div className="ProductsSection1">
      <div className="ProductsSection1_container">
        {/* Box--1 */}
        <div className="Product_Section1_box box1">
          <div className="Product_Section1_row">
            <div className="Product_Section1_col50">
              <div className="Product_section1_imgbox">
                <img src={img1} alt="" />
              </div>
            </div>
            <div className="Product_Section1_col50">
              <div className="Product_Section1_col50_text">
                <h1>The Production Process</h1>
                <p>
                  Epoxy Manufacture Drugs belonging to a variety of theapeutic
                  categories in differect dosage forms
                </p>
                <div className="Products_section1_button">
                  <Button text="Walk through our Production Process" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Box---2 */}
        <div className="Product_Section1_box box2">
          <div className="Product_Section1_row">
            <div className="Product_Section1_col50">
              <div className="Product_section1_imgbox">
                <img src={img2} alt="" />
              </div>
            </div>
            <div className="Product_Section1_col50">
              <div className="Product_Section1_col50_text">
                <h1>Quality & Safety</h1>
                <p>
                  Epoxy has an international reputation for the safety and
                  quality of its products. We strive for the highest quality
                  throughout the entire production process.
                </p>
                <div className="Products_section1_button">
                  <Button text="Learn all our Quality and safety measures" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsSection1;
