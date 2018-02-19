import React from "react";
import ReactDOM from "react-dom";
import firebase from "./config";
import { FirestoreProvider } from "react-firestore";

import App from "./App";

ReactDOM.render(
  <FirestoreProvider firebase={firebase}>
    <App />
  </FirestoreProvider>,
  document.getElementById("root")
);
