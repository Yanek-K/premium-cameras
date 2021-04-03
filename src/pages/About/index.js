import React from "react";
import "./styles.scss";

import office from "./../../assets/office.jpeg";
import LogoAbout from "./../../assets/LogoAbout.png";

const About = () => {
  return (
    <div className="about">
      <div className="wrap">
        <div className="aboutHeader">
          <h1>About Premium Cameras</h1>
          <img src={LogoAbout} className="aboutLogo" />
        </div>
        <div className="content">
          <img src={office} className="image" />
          <ul>
            <li>
              For over 30 years, Premium Cameras has been the go-to destination
              For photographers, both professional and amateur.
            </li>
            <li>
              A family run business, we pride ourselves on collecting the best
              in photographic history and Ensuring that our products are of the
              highest quality. Our team has over 70 years of combined experience
              with vintage cameras, and we are all passionate about what we do.
            </li>
            <li>
              We know that buying your next camera is an experience to savour.
              That is why we ask all our Customers to spend some time in the
              store getting to know our products and team. Sometimes, A second
              opinion can make all the difference.
            </li>
            <li>
              To get in contact with us, or book an appointment with one of our
              consultants, send us an email at info@premiumcameras.com.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
