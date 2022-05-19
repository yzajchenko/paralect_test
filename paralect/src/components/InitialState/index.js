import React from "react";

import Icon from "../../comonComponents/Icon/";
import initialState from "./img/initialState.png";
import "./styles.css";

const InitialState = () => {
  return (
    <div className="initialState">
      <Icon
        img={initialState}
        description={"Start with searching a GitHub user"}
      ></Icon>
    </div>
  );
};

export default InitialState;
