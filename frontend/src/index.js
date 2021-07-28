import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import "./index.css";
import "./css/all.css";
import store from "./store/store.js";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", (e) => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((req) => console.log("[sw] : registered"))
      .catch((err) => console.log("[error] : ", err));
  });
}
