import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./components/app/";

import { Provider } from "react-redux";
import store from "./redux";

import "./i18next";

ReactDOM.render(
  <Suspense fallback={<div>Loading</div>}>
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>,
  document.getElementById("root")
);
