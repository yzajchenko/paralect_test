import React from "react";

import Icon from "../../comonComponents/Icon/";
import userNotFound from "./img/userNotFound.png";
import "./styles.css";

const UserNotFound = () => {
  return (
    <div className="userNotFound">
      <Icon img={userNotFound} description={"User not found"}></Icon>
    </div>
  );
};

export default UserNotFound;
