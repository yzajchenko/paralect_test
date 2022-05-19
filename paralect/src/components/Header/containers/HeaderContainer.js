import { useState, useCallback } from "react";

import HeaderLayout from "../components/HeaderLayout/";

const HeaderContainer = ({ handleGetUser }) => {
  const [inputValue, setInputValue] = useState("");

  const handleUser = (event) => {
    event.preventDefault();
    handleGetUser(inputValue);
    setInputValue("");
  };
  const handleInput = useCallback(
    (event) => {
      const { value } = event.target;
      setInputValue(value);
    },
    [inputValue]
  );

  return (
    <>
      <HeaderLayout
        handleGetUser={handleUser}
        handleInput={handleInput}
        inputValue={inputValue}
      />
    </>
  );
};

export default HeaderContainer;
