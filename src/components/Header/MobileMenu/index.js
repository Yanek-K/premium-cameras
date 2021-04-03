import React from "react";
import "./styles.scss";
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";

import { signOutUserStart } from "./../../../redux/User/user.actions";

import { slide as Menu } from "react-burger-menu";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AddCircleOutlinedIcon from "@material-ui/icons/AddCircleOutlined";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";

const mapState = (state) => ({
  currentUser: state.user.currentUser,
});

const MobileMenu = ({}) => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(mapState);

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  return (
    <div className="mobileMenu">
      <ul>
        <div className="searchIcon">
          <li>
            <Link to="/search">
              <PhotoCameraIcon style={{ fontSize: 32, paddingRight: "12" }} />
            </Link>
          </li>
        </div>
        <li>
          <Link to="/cart">
            <ShoppingBasketIcon style={{ fontSize: 32, paddingRight: "12" }} />
          </Link>
        </li>

        {currentUser && [
          <li>
            <Link to="/dashboard">
              <AccountCircleIcon style={{ fontSize: 32, paddingRight: "12" }} />
            </Link>
          </li>,
          <li>
            <span onClick={() => signOut()}>
              <ExitToAppIcon style={{ fontSize: 32, paddingRight: "12" }} />
            </span>
          </li>,
        ]}

        {!currentUser && [
          <li>
            <Link to="/login">
              <AccountCircleIcon style={{ fontSize: 32, paddingRight: "12" }} />
            </Link>
          </li>,
          <li>
            <Link to="/registration">
              <AddCircleOutlinedIcon
                style={{ fontSize: 32, paddingRight: "12" }}
              />
            </Link>
          </li>,
        ]}
      </ul>
    </div>
  );
};

export default MobileMenu;
