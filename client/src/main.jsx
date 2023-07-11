import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import "./styles/style.scss";

import { createStore } from "redux";
import App from "./App";
import rootReducer from "./redux/rootReducer";

const store = createStore(rootReducer);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
