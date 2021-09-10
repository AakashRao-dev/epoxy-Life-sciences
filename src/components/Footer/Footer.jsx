import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import img from "../../images/Logo-white.png";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer_container">
        <div className="footer_logo">
          <img src={img} alt="Logo" />
        </div>
        <div className="part1">
          <div className="address_container">
            <div className="address">
              <h2>Corporate Office</h2>
              <p>
                Room No. 1 & 2, GR.FL., HOUSE NO. 4829/25, W.NO 20, Nagrik
                Suvichar Society, Janki Nagar, Chikhali (KHU) Maa Bhagwati
                Nagar, Nagpur-440034
              </p>
            </div>
            <div className="follow">
              <h2>
                Follow Us
                <a href="#" className="Footer_Navlink">
                  <FaFacebook className="footer_icon" />
                </a>
                <a href="#" className="Footer_Navlink">
                  <FaLinkedin className="footer_icon" />
                </a>
                <a href="#" className="Footer_Navlink">
                  <FaTwitter className="footer_icon" />
                </a>
              </h2>
            </div>
          </div>
          <div className="quick_links">
            <h2>Quick Links</h2>
            <ul>
              <NavLink to="/about" className="Footer_Navlink">
                <li>About Us</li>
              </NavLink>
              <NavLink to="/business-operations" className="Footer_Navlink">
                <li>Business Operations</li>
              </NavLink>
              <NavLink to="/products" className="Footer_Navlink">
                <li>Products</li>
              </NavLink>
              <NavLink to="/manufacturing" className="Footer_Navlink">
                <li>Media</li>
              </NavLink>
              <NavLink to="/contact" className="Footer_Navlink">
                {" "}
                <li>Contact Us</li>
              </NavLink>
            </ul>
          </div>
        </div>

        <hr className="Line" />
        <div className="copyright">
          <p>
            Copyright @ 2021 Epoxy Life Sciences (EPS) |{" "}
            <span>
              <NavLink to="/privacypolicy" className="Footer_Navlink">
                Privacy Policy
              </NavLink>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
