import React from "react";

import logo from "../../img/logo.png";
import "./styles.css";

const HeaderLayout = ({ handleGetUser, inputValue, handleInput }) => {
  return (
    <header>
      <div className="header">
        <div className="logo">
          <img src={logo} width="auto" height="40px" />
        </div>
        <form onSubmit={handleGetUser}>
          <input
            type="text"
            className="inputValue"
            placeholder="Enter GitHub username"
            value={inputValue}
            onChange={(event) => handleInput(event)}
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
    </header>
  );
};

export default HeaderLayout;
