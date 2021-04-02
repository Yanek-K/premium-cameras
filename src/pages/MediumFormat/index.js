import React from "react";
import "./styles.scss";

import Yashica from "./../../assets/Yashica.jpeg";

const MediumFormat = () => {
  return (
    <div className="mediumFormat">
      <div className="wrap">
        <div>
          <h1>Medium Format Cameras</h1>
        </div>
        <div className="mainContent">
          <img src={Yashica} />
          <ul>
            <li>
              <h2>The Difference Between 35mm and 120 Films</h2>
              <p>
                The chief difference between 35mm and 120 film, and large format
                film, is the size of the film. For 35mm and large format these
                numbers are pretty set in stone unless you’re experimenting with
                panorama or custom cameras. With 120 film on the other hand, the
                size of the film depends on the camera. Although they produce
                incredible images with excellent colour reproduction, they are
                not the best choice for photography in certain situations. The
                heavy weight and bulky designs of medium format cameras make
                them difficult to use for street photography, action scenarios
                and photojournalism. While they play a fascinating role in
                professional landscape photography, they are also cumbersome if
                you tend to work alone without a team to help you carry around
                all of your gear.
              </p>
            </li>

            <li>
              <h2>What Are Medium Format Cameras Good For?</h2>
              <p>
                The most common reason that photographers choose to invest in a
                medium format camera system is for the purpose of producing very
                large photographs at a higher resolution than would be able to
                be achieved with a 35mm film or digital camera. Considering the
                applications that we’ve mentioned above, these are all genres of
                photography in which images may need to be enlarged or magnified
                for publication. Think of billboards, magazine covers and floor
                to ceiling prints in an art gallery.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MediumFormat;
