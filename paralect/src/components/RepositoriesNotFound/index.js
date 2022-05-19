import React from "react";

import Icon from "../../comonComponents/Icon/";
import repositoriesNotFound from "./img/repositoriesNotFound.png";
import "./styles.css";

const RepositoriesNotFound = () => {
  return (
    <div className="repositoriesNotFound">
      <Icon
        img={repositoriesNotFound}
        description={"Repository list is empty"}
      ></Icon>
    </div>
  );
};

export default RepositoriesNotFound;
