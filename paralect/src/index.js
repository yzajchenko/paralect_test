import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { configureStore } from "./store/configureStore";
import HomePageContainer from "./pages/HomePage/containers/HomePageContainer";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HomePageContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
