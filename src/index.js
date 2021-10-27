import { CssBaseline } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { configureStore } from "@reduxjs/toolkit";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
// import stepperReducer from "./store/Inventory/stepper";
// import guidelinesReducer from "./store/Inventory/guidelines";
// import detailsReducer from "./store/Inventory/details";
import ctaReducer from "./store/cta";
import donationsReducer from './store/donations'
const store = configureStore({
  reducer: {
    // stepper: stepperReducer,
    // guidelines: guidelinesReducer,
    // details: detailsReducer,
    cta: ctaReducer,
    donations: donationsReducer
  },
});

ReactDOM.render(
  <>
    <CssBaseline />
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </>,
  document.getElementById("root")
);

reportWebVitals();
