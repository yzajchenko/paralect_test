import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import HeaderContainer from "../../../components/Header/containers/HeaderContainer";
import MainContainer from "../../../components/Main/containers/MainContainer";
import Loading from "../../../comonComponents/Loading/";
import {
  USERS_SUCCESS,
  USER_NOT_FOUND,
  REPOSITORIES_SUCCESS,
  REPOSITORIES_NOT_FOUND,
  USERS_REQUEST,
  REPOSITORIES_REQUEST,
} from "../actions/";

const HomePageContainer = () => {
  const dispatch = useDispatch();

  const { user, page, itemsPerPage, loading } = useSelector(
    (state) => state.userManagerReducer
  );

  const handleGetUser = async (inputValue) => {
    dispatch(USERS_REQUEST());
    let response = await fetch(`https://api.github.com/users/${inputValue}`, {
      headers: {
        Authorization: "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",
      },
    });
    if (response.ok) {
      let res = await response.json();
      dispatch(USERS_SUCCESS(res));
    } else {
      dispatch(USER_NOT_FOUND());
    }
  };

  useEffect(() => {
    if (user) {
      dispatch(REPOSITORIES_REQUEST());
      const fethData = async () => {
        let response = await fetch(
          `https://api.github.com/users/${user.login}/repos?per_page=${itemsPerPage}&&page=${page}`,
          {
            headers: {
              Authorization: "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",
            },
          }
        );

        let res = await response.json();
        if (res.length > 0) {
          dispatch(REPOSITORIES_SUCCESS(res));
        } else {
          dispatch(REPOSITORIES_NOT_FOUND());
        }
      };
      fethData();
    }
  }, [user, page]);

  return (
    <>
      <HeaderContainer
        handleGetUser={(inputValue) => handleGetUser(inputValue)}
      />
      {loading ? <Loading /> : null}
      <MainContainer />
    </>
  );
};

export default HomePageContainer;
