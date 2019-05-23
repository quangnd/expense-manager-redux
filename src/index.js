import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "react-dates/lib/css/_datepicker.css";
import { Provider } from "react-redux";
import App from "./App";
import configureStore from "./store/configureStore";
import * as serviceWorker from "./serviceWorker";
import { addExpense } from "./actions/expenses";

const store = configureStore();
store.dispatch(
  addExpense({ description: "mun bill", amount: 10, createdAt: 400 })
);
store.dispatch(
  addExpense({ description: "water bill", amount: 20, createdAt: 300 })
);
store.dispatch(
  addExpense({ description: "electric", amount: 30, createdAt: 200 })
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
