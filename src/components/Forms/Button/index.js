import React from "react";
import "./styles.scss";

const Button = ({ children, ...otherProps }) => {
  return (
    <button {...otherProps} className="btn">
      <div>Sign In with Google</div>
    </button>
  );
};

export default Button;
