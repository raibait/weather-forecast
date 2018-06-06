import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import reducer from "./reducers";
import "./index.css";
import { createStore, compose } from "redux";
import { Provider } from "react-redux";

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);
const store = createStore(reducer, enhancers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
