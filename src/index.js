import React from "react";
import { render } from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware } from "redux";
import todos from "./reducers/todoReducer";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

const getRootReducer = () => {
  return combineReducers({ todos });
};

const configureStore = initialState => {
  return createStore(
    getRootReducer(),
    initialState,
    applyMiddleware(reduxImmutableStateInvariant())
  );
};

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
