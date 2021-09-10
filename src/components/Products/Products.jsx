import React from "react";
import ProductsHero from "./ProductsHero/ProductsHero";
import Header from "../Header/Header";
import ProductsSection1 from "./ProductsSection1/ProductsSection1";
import Footer from "../Footer/Footer";
import ProductsSection2 from "./ProductsSection2/ProductsSection2";

const Products = () => {
  return (
    <>
      <Header />
      <ProductsHero />
      <ProductsSection2 />
      <ProductsSection1 />
      <Footer />
    </>
  );
};

export default Products;
