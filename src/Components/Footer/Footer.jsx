import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>Contact Us</h3>
            <p>Email: IMSECEvents@gmail.com</p>
            <p>Phone: +91 6397889006</p>
          </div>
          <div className="col-md-6">
            <h3>Follow Us</h3>
            <ul className="social-icons">
              <li>
                <a
                  href="https://www.instagram.com/imsecghaziabad143/"
                  target="Instagram"
                  rel="Instagram"
                >
                  <i className="instagram">INSTAGRAM</i>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter">TWITTER</i>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="Linkedin" rel="Linkedin">
                  <i className="fab fa-instagram">LINKEDIN</i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 IMSEC EVENTS. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
