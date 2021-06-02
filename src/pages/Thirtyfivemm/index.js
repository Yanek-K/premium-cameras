import React from "react";
import "./styles.scss";

//Assets
import Vivitar from "./../../assets/Vivitar.jpeg";

//Components
import Button from "./../../components/Forms/Button";

//Redux
import { Link } from "react-router-dom";

const configThirtyFiveBtn = {
  type: "button",
};

const Thirtyfivemm = () => {
  return (
    <div className="thirtyFive">
      <div className="wrap">
        <div>
          <h1>35mm Cameras</h1>
        </div>
        <div className="mainContent">
          <img src={Vivitar} alt="Vivitar" />
          <div className="thirtyFiveBtn">
            <Link to="/search/35mm">
              <Button {...configThirtyFiveBtn}>Shop Our 35mm Cameras</Button>
            </Link>
          </div>
          <ul>
            <li>
              <h2>Shopping for Used 35mm Film Cameras</h2>
              <p>
                35mm film cameras offer a similar degree of resolution to many
                digital cameras. The grain, color rendition, and dynamic range
                of film combine to create a pleasing result that’s subtly
                different than digital. Although few manufacturers still produce
                35mm filmcameras, there are many used film cameras for sale.
              </p>
            </li>

            <li>
              <h2>Choosing Used Film Cameras</h2>
              <p>
                There are two types of 35mm cameras: SLR film cameras and
                rangefinder cameras. SLRs have similar features to DSLR cameras.
                They use an optical viewfinder and mirror arrangement to view
                the image through the lens. SLRs have integrated
                through-the-lens light meters and accept interchangeable lenses.
                Common brands include Nikon, Pentax, and Canon. Rangefinder
                cameras use a separate viewfinder, which makes for a smaller and
                lighter camera, although it’s necessary to adjust for parallax
                when taking close-up photos. Interchangeable lenses are
                available for some types of rangefinder cameras. In many ways,
                they’re similar to mirrorless cameras.
              </p>
            </li>
            <li>
              <h2>Finding Lenses for 35mm SLR Film Cameras</h2>
              <p>
                Each type of camera has its own lens mount. Old Canon 35mm
                cameras usually use a screw type, while newer ones have a
                bayonet mount. In some instances, mounts are compatible with
                modern lens types, and in other cases, it’s possible to purchase
                lens mount adapters. The optical quality of many old lenses is
                good, and some are better than modern lenses. When shopping for
                used lenses and lens accessories, remember that autofocus
                systems may not work on older cameras, so ensure you can
                manually set the lens aperture.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Thirtyfivemm;
