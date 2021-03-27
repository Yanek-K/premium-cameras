import React from "react";
import "./styles.scss";
import Shop35mm from "./../../assets/shop35mm.jpg";
import ShopMediumFormat from "./../../assets/shopMediumFormat.jpeg";

const Directory = (props) => {
  return (
    <div className="directory">
      <div className="wrap" style={{ paddingLeft: "10px" }}>
        <div
          className="item"
          style={{
            backgroundImage: `url(${Shop35mm})`,
            marginRight: "15px",
          }}
        >
          <a href="">Shop 35mm Cameras</a>
        </div>
        <div
          className="item"
          style={{ backgroundImage: `url(${ShopMediumFormat})` }}
        >
          <a href="">Shop Medium Format</a>
        </div>
      </div>
    </div>
  );
};

export default Directory;
