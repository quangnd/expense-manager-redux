import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import configureStore from "./store/configureStore";
import * as serviceWorker from "./serviceWorker";
import { addExpense } from "./actions/expenses";

//Test store working
const store = configureStore();
store.dispatch(
  addExpense({
    description: "mun",
    note: "note",
    amount: 10
  })
);
console.log(store.getState());

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
