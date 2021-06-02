import React from "react";
import "./styles.scss";

//MUI
import SupervisedUserCircleTwoToneIcon from "@material-ui/icons/SupervisedUserCircleTwoTone";

const UserProfile = (props) => {
  const { currentUser } = props;
  const { displayName } = currentUser;
  return (
    <div className="userProfile">
      <ul>
        <li>
          <div className="img">
            <SupervisedUserCircleTwoToneIcon style={{ fontSize: 40 }} />
          </div>
        </li>
        <li>
          <span className="displayName">{displayName && displayName}</span>
        </li>
      </ul>
    </div>
  );
};

export default UserProfile;
