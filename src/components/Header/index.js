import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./styles.scss";

//Redux
import { selectCartItemsCount } from "./../../redux/Cart/cart.selectors";
import { signOutUserStart } from "./../../redux/User/user.actions";

//Components
import MobileMenu from "./MobileMenu";

//Assets
import logo from "./../../assets/logo2.png";

const mapState = (state) => ({
  currentUser: state.user.currentUser,
  totalNumCartItems: selectCartItemsCount(state),
});

const Header = (props) => {
  const dispatch = useDispatch();
  const { currentUser, totalNumCartItems } = useSelector(mapState);

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Premium Cameras Logo" />
          </Link>
        </div>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <div className="callToActions">
          <div className="regular">
            <ul>
              <li>
                <Link to="/cart">My Cart ({totalNumCartItems})</Link>
              </li>
              {currentUser && [
                <li>
                  <Link to="/dashboard">My Account</Link>
                </li>,
                <li>
                  <span onClick={() => signOut()}>Logout</span>
                </li>,
              ]}

              {!currentUser && [
                <li>
                  <Link to="/registration">Register</Link>
                </li>,
                <li>
                  <Link to="/login">Login</Link>
                </li>,
              ]}
            </ul>
          </div>
          <ul>
            <div className="ipadMenu">
              <MobileMenu />
            </div>
          </ul>
        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  currentUser: null,
};

export default Header;
