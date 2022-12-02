import { configureStore, combineReducers, compose } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import global from "./reducers/global";
const reducer = combineReducers({
  global
});

const store = configureStore(
  {
    reducer,
    devTools: true,
    middleware: [thunk]
  },
  (window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()) ||
    compose
);

export default store;
