import { useSelector } from "react-redux";

import Person from "../../Person/";
import RepositoriesContainer from "../../Repositories/containers/RepositoriesContainer";
import RepositoriesNotFound from "../../RepositoriesNotFound/";
import UserNotFound from "../../UserNotFound/";
import InitialState from "../../InitialState/";
import "./styles.css";

const MainContainer = () => {
  const { user, repositoriesNotFound, initialState, userNotFound } =
    useSelector((state) => state.userManagerReducer);

  return (
    <div className="main">
      {initialState ? (
        <InitialState />
      ) : userNotFound ? (
        <UserNotFound />
      ) : repositoriesNotFound ? (
        <div className="main__container">
          <Person user={user} />
          <RepositoriesNotFound />
        </div>
      ) : (
        <>
          <div className="main__container">
            <Person user={user} />
            <RepositoriesContainer />
          </div>
        </>
      )}
    </div>
  );
};

export default MainContainer;
