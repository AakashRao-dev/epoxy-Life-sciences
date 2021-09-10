import React from "react";
import BusinessHero from "./Business_Hero/BusinessHero";
import Header from "../Header/Header";
import BusinessSection1 from "./Business_Section1/BusinessSection1";
import Footer from "../Footer/Footer";

const Business = () => {
  return (
    <>
      <Header />
      <BusinessHero />
      <BusinessSection1 />
      <Footer />
    </>
  );
};

export default Business;
