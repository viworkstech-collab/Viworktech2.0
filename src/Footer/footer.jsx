import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import { FaLinkedin, FaInstagram, FaGithub, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Column 1 - Brand */}
        <div className="footer-brand">
          <h2 className="brand-title">Viworkstech</h2>
          <p className="brand-tag">Crafting Digital Excellence</p>

          <div className="social-icons">
            <a href="https://www.linkedin.com/in/viwork-tech-55b756394/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/viwork_tech" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div className="footer-links">
          <h3>QUICK LINKS</h3>
          <Link to="/Home">Home</Link>
          <Link to="/About">About Us</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Column 3 - Services */}
        <div className="footer-links">
          <h3>SERVICES</h3>
          <Link to="/services/web-development">Web Development</Link>
          <Link to="/services/mobile-app">Mobile App Development</Link>
          <Link to="/services/ui-ux">UI/UX Design</Link>
          <Link to="/services/digital-marketing">Digital Marketing</Link>
        </div>

        {/* Column 4 - Contact */}
        <div className="footer-contact">
          <h3>CONTACT</h3>

          {/* Open Gmail compose in new tab */}
          <p
            onClick={() =>
              window.open(
                "https://mail.google.com/mail/u/0/#inbox?compose=DmwnWtMnXlqmjWGzHpMwKgcrmHgTZZvdpPRMCtLTjtjnpHRMSfpbkBBkSXLcwGsmpQMfhDhlcHfB",
                "_blank"
              )
            }
            style={{ cursor: "pointer" }}
          >
            <FaEnvelope /> viworkstech@gmail.com
          </p>

          <p><FaPhone /> +91-861865778</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 Viworkstech. All rights reserved.</p>
        <div>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <span> | </span>
          <Link to="/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
