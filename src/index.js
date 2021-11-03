import { CssBaseline } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { configureStore } from "@reduxjs/toolkit";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import donationsReducer from "./store/donations";
import ctaReducer from "./store/cta";
import inventoryReducer from "./store/inventory";
import usersReducer from "./store/users";

const store = configureStore({
  reducer: {
    cta: ctaReducer,
    donations: donationsReducer,
    inventory: inventoryReducer,
    users: usersReducer,
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
