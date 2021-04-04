import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="left">
          <div className="contact">
            <h5>Contact</h5>
            <ul>
              <li>237 Peter Street</li>
              <li>Toronto, ON</li>
              <li>M4R 2S8</li>
              <li>info@premiumcameras.com</li>
              <li>+ 1 647 442 1512</li>
            </ul>
          </div>
          <div className="about">
            <Link to="/about">
              <h5>About</h5>
            </Link>
            <ul>
              <Link to="/about">
                <li>Professional Services</li>
                <li>Company Information</li>
                <li>Our History</li>
                <li>Our Office</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="hours">
          <h5>Hours</h5>
          <ul>
            <li>Mon-Fri : 10 - 6</li>
            <li>Sat: 10 - 4</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
