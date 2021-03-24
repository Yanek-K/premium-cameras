import React from "react";

import "./styles.scss";

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="left">
          <div className="contact">
            <h5>Contact Us</h5>
            <ul>
              <li>82 Warren Road</li>
              <li>Toronto, ON</li>
              <li>M4V 2R7</li>
              <li>647 473 1535</li>
            </ul>
          </div>
          <div className="about">
            <h5>About Us</h5>
            <ul>
              <li>Store Location</li>
              <li>Professional Services</li>
              <li>Company Information</li>
              <li>Careers</li>
            </ul>
          </div>
        </div>
        <div className="hours">
          <h5>Store Hours</h5>
          <ul>
            <li>Mon-Fri : 10-6</li>
            <li>Sat: 10-4</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
