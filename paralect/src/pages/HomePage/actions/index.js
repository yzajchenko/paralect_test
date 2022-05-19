import { createAction } from "redux-actions";

export const USER_NOT_FOUND = createAction("USER_NOT_FOUND");
export const REPOSITORIES_NOT_FOUND = createAction("REPOSITORIES_NOT_FOUND");
export const USERS_SUCCESS = createAction("USERS_SUCCESS");
export const USERS_REQUEST = createAction("USERS_REQUEST");
export const REPOSITORIES_REQUEST = createAction("REPOSITORIES_REQUEST");
export const REPOSITORIES_SUCCESS = createAction("REPOSITORIES_SUCCESS");
export const PAGE = createAction("PAGE");
