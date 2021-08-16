import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
// store will be used as a prop
import { store } from "./state/store";

ReactDOM.render(
  <React.StrictMode>
    {/* store is a prop */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
