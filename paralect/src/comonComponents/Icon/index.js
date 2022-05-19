import React from "react";

import "./styles.css";

const Icon = ({ img, description }) => {
  return (
    <div className="icon">
      <div className="icon__img">
        <img src={img} alt="icon" />
      </div>
      <div className="icon__description">{description}</div>
    </div>
  );
};

export default Icon;
