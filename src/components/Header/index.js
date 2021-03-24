import React from "react";
import "./styles.scss";
import logo from "./../../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="wrap">
        <Link to="/">
          <div className="logo">
            <img src={logo} alt="Premium Cameras Logo" />
          </div>
        </Link>
        <div className="callToActions">
          <ul>
            <li>
              <Link to="/registration">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
