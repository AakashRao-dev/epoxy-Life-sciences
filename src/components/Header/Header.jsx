import React, { useState } from "react";
import "../Header/Header.css";
import { NavLink } from "react-router-dom";
import Logo from "../../images/Logo.png";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlinePhoneOutgoing } from "react-icons/hi";
import { FaBars as MenuIcon } from "react-icons/fa";
import { GrFormClose as CloseMenu } from "react-icons/gr";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="Header">
      <div className="contact">
        <div className="phone" onClick={closeMobileMenu}>
          <div className="phone_img">
            <a href="tel: 91 9111013756">
              <HiOutlinePhoneOutgoing />
            </a>
          </div>
          <div className="phone_text">
            <a href="tel: 91 9111013756">91 9111013756</a>
          </div>
        </div>
        <div className="email" onClick={closeMobileMenu}>
          <div className="email_img">
            <a href="mailto: epoxylifesciences@gmail.com">
              <AiOutlineMail />
            </a>
          </div>
          <div className="email_text">
            <a href="mailto: epoxylifesciences@gmail.com">
              epoxylifesciences@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="Logo">
        <NavLink to="/">
          <img src={Logo} alt="Logo" />
        </NavLink>
      </div>
      <div className={click ? "nav-options active" : "nav-options"}>
        <NavLink to="/about" className="links" onClick={closeMobileMenu}>
          About
        </NavLink>
        <NavLink to="contact" className="links" onClick={closeMobileMenu}>
          Contact
        </NavLink>
        <NavLink
          to="business-operations"
          className="links"
          onClick={closeMobileMenu}
        >
          Business Operations
        </NavLink>
        <NavLink to="products" className="links" onClick={closeMobileMenu}>
          Products
        </NavLink>
        <NavLink to="Manufacturing" className="links" onClick={closeMobileMenu}>
          Manufacturing
        </NavLink>
        <NavLink
          to="research & development"
          className="links"
          onClick={closeMobileMenu}
        >
          R&D
        </NavLink>
        <NavLink to="our people" className="links" onClick={closeMobileMenu}>
          Our People
        </NavLink>
        <div className="links button">
          <a href="tel: +91 9111013756" className="links button">
            <div className="imgbx">
              <HiOutlinePhoneOutgoing />
            </div>
            +91 9111013756
          </a>
          <a
            href="mailto: epoxylifesciences@gmail.com"
            className="links button"
          >
            <div className="imgbx">
              <AiOutlineMail />
            </div>
            epoxylifesciences@gmail.com
          </a>
        </div>
      </div>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon close-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default Header;
