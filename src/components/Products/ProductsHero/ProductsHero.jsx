import React from "react";
import "./ProductsHero.css";
import Button from "../../Button/Button";

const ProductsHero = () => {
  return (
    <div className="ProductsHero">
      <div className="ProductsHero_container">
        <div className="ProductsHero_text">
          <h1>Products</h1>
          <p>
            Learn more about our products to treat rare diseases and other
            coagulopathies and bleeding disorders.
          </p>
          <div className="ProductsHero_Button">
            <Button text="Check out our product portfolio" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsHero;
