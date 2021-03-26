import React from "react";
import { connect } from "react-redux";

import "./styles.scss";
import logo from "./../../assets/logo.png";
import { Link } from "react-router-dom";
import { auth } from "./../../firebase/utils";

const Header = (props) => {
  const { currentUser } = props;

  return (
    <header className="header">
      <div className="wrap">
        <Link to="/">
          <div className="logo">
            <img src={logo} alt="Premium Cameras Logo" />
          </div>
        </Link>
        <div className="callToActions">
          {currentUser && (
            <ul>
              <li>
                <span onClick={() => auth.signOut()}>Logout</span>
              </li>
            </ul>
          )}
          {!currentUser && (
            <ul>
              <li>
                <Link to="/registration">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  currentUser: null,
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

export default connect(mapStateToProps, null)(Header);
