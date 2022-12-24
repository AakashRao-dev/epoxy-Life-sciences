import React from 'react';
import './ProductSection2.css';
import img5 from '../../../images/product-5.jpeg';
import img6 from '../../../images/product-6.jpeg';
import img7 from '../../../images/product-7.jpeg';
import img8 from '../../../images/product-8.jpeg';
import img9 from '../../../images/product-9.jpeg';
import img10 from '../../../images/product-10.jpeg';
import img11 from '../../../images/product-11.jpeg';
import img12 from '../../../images/product-12.jpeg';
import img13 from '../../../images/product-13.jpeg';
import img14 from '../../../images/product-14.jpeg';
import img15 from '../../../images/product-15.jpeg';

const ProductsSection2 = () => {
  return (
    <div className="production_section2">
      {/* Grid Container */}
      <div className="product_container">
        {/* item-5 */}
        <div className="product_item">
          <img src={img5} alt="" />
        </div>
        {/* item-6 */}
        <div className="product_item">
          <img src={img6} alt="" />
        </div>
        {/* item-7 */}
        <div className="product_item">
          <img src={img7} alt="" />
        </div>
        {/* item-8 */}
        <div className="product_item">
          <img src={img8} alt="" />
        </div>
        {/* item-9 */}
        <div className="product_item">
          <img src={img9} alt="" />
        </div>
        {/* item-10 */}
        <div className="product_item">
          <img src={img10} alt="" />
        </div>
        {/* item-11 */}
        <div className="product_item">
          <img src={img11} alt="" />
        </div>
        {/* item-12 */}
        <div className="product_item">
          <img src={img12} alt="" />
        </div>
        {/* item-13 */}
        <div className="product_item">
          <img src={img13} alt="" />
        </div>
        {/* item-14 */}
        <div className="product_item">
          <img src={img14} alt="" />
        </div>
        {/* item-15 */}
        <div className="product_item">
          <img src={img15} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProductsSection2;
