import React from "react";
import "./styles.scss";

const Button = ({ children, ...otherProps }) => {
  return (
    <button {...otherProps} className="btn">
      <div>{children}</div>
    </button>
  );
};

export default Button;
