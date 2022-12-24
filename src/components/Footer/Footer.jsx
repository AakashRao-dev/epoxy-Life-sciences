import React from 'react';
import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import './Footer.css';
import { NavLink } from 'react-router-dom';
import img from '../../images/Logo-white.png';

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
                Room No. 1, 2, & 3, First Floor, House No. 6657/A/14, Plot No
                W.NO. 14, Awadut Nagar No.1, Chikhali Road, Chikhali Layout,
                Manewada, Nagpur, Tal: Corporation Zone 40 (NAGPUR ZONE 1)
              </p>
            </div>
            <div className="follow">
              <h2>
                Follow Us
                <a
                  href="https://www.instagram.com/epoxylifesciences/"
                  className="Footer_Navlink"
                >
                  <FaInstagram className="footer_icon" />
                </a>
                <a
                  href="https://twitter.com/VipinGo85769686"
                  className="Footer_Navlink"
                >
                  <FaTwitter className="footer_icon" />
                </a>
                <a
                  href="https://www.linkedin.com/in/vipin-goyal-72b79218/"
                  className="Footer_Navlink"
                >
                  <FaLinkedinIn className="footer_icon" />
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
                {' '}
                <li>Contact Us</li>
              </NavLink>
            </ul>
          </div>
        </div>

        <hr className="Line" />
        <div className="copyright">
          <p>
            Copyright @ 2021 Epoxy Life Sciences (EPS) |{' '}
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
