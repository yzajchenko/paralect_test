import { handleActions } from "redux-actions";

import * as actions from "../actions";

const initialState = {
  user: {},
  userNotFound: false,
  repositories: [],
  repositoriesNotFound: false,
  page: 1,
  itemsPerPage: 4,
  initialState: true,
  loading: false,
};

const userManagerReducer = handleActions(
  {
    [actions.USERS_REQUEST]: (state) => {
      return {
        ...state,
        page: 1,
        loading: true,
      };
    },
    [actions.REPOSITORIES_REQUEST]: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    [actions.USERS_SUCCESS]: (state, { payload }) => {
      return {
        ...state,
        user: payload,
        userNotFound: false,
        initialState: false,
        loading: false,
      };
    },
    [actions.USER_NOT_FOUND]: (state) => {
      return {
        ...state,
        user: {},
        userNotFound: true,
        initialState: false,
        loading: false,
      };
    },
    [actions.REPOSITORIES_SUCCESS]: (state, { payload }) => {
      return {
        ...state,
        repositories: payload,
        repositoriesNotFound: false,
        loading: false,
      };
    },
    [actions.REPOSITORIES_NOT_FOUND]: (state) => {
      return {
        ...state,
        repositories: [],
        repositoriesNotFound: true,
        loading: false,
      };
    },
    [actions.PAGE]: (state, { payload }) => {
      return {
        ...state,
        page: payload,
      };
    },
  },
  initialState
);

export default userManagerReducer;
