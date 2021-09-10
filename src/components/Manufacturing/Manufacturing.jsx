import React from "react";
import ManufacturingHero from "./ManufacturingHero/ManufacturingHero";
import Header from "../Header/Header";
import ManufacturingSection1 from "./ManufacturingSection1/ManufacturingSection1";
import ManufacturingSection2 from "./ManufacturingSection2/ManufacturingSection2";
import Footer from "../Footer/Footer";

const Manufacturing = () => {
  return (
    <>
      <Header />
      <ManufacturingHero />
      <ManufacturingSection1 />
      <ManufacturingSection2 />
      <Footer />
    </>
  );
};

export default Manufacturing;
