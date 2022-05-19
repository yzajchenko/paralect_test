import { combineReducers } from "redux";

import userManagerReducer from "../pages/HomePage/reducers/";

const rootReducer = combineReducers({
  userManagerReducer,
});

export default rootReducer;
