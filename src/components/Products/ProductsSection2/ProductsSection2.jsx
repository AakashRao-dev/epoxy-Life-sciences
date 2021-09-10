import React from "react";
import "./ProductSection2.css";
import img1 from "../../../images/product1.jpeg";
import img2 from "../../../images/product-2.jpeg";
import img3 from "../../../images/product-3.jpeg";
import img4 from "../../../images/product-4.jpeg";

const ProductsSection2 = () => {
  return (
    <div className="productSection2">
      <div className="productSection2_container">
        <div className="Product_box">
          <div className="box">
            <div className="imgbox">
              <img src={img1} alt="" />
            </div>
            <div className="price">
              <h3>Price-60.50</h3>
            </div>
          </div>
          <div className="box">
            <div className="imgbox">
              <img src={img2} alt="" />
            </div>
            <div className="price">
              <h3>Price-49.70</h3>
            </div>
          </div>
          <div className="box">
            <div className="imgbox">
              <img src={img3} alt="" />
            </div>
            <div className="price">
              <h3>Price-149</h3>
            </div>
          </div>
          <div className="box">
            <div className="imgbox">
              <img src={img4} alt="" />
            </div>
            <div className="price">
              <h3>Price-1898</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsSection2;
