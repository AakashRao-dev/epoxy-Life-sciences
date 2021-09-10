import React from "react";
import Header from "../Header/Header";
import ContactForm from "./ContactHero/ContactForm";
import Footer from "../Footer/Footer";
import ContactHero1 from "./ContactHero1/ContactHero1";

const Contact = () => {
  return (
    <div>
      <Header />
      <ContactHero1 />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
