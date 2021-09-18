import { CssBaseline } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { configureStore } from "@reduxjs/toolkit";

import { Provider } from "react-redux";
import stepperReducer from "./store/Inventory/stepper";
import guidelinesReducer from "./store/Inventory/guidelines";
import detailsReducer from "./store/Inventory/details";

const store = configureStore({
  reducer: {
    stepper: stepperReducer,
    guidelines: guidelinesReducer,
    details: detailsReducer,
  },
});

ReactDOM.render(
  <>
    <CssBaseline />
    <Provider store={store}>
      <App />
    </Provider>
  </>,
  document.getElementById("root")
);

reportWebVitals();
