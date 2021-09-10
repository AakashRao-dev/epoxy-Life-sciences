import React from "react";
import PeopleHero from "./PeopleHero/PeopleHero";
import Header from "../Header/Header";
import PeopleSection1 from "./PeopleSection1/PeopleSection1";
import Footer from "../Footer/Footer";

const People = () => {
  return (
    <div>
      <Header />
      <PeopleHero />
      <PeopleSection1 />
      <Footer />
    </div>
  );
};

export default People;
