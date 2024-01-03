import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import formReducer from "../reducers/formReducer";

export const rootReducer = combineReducers({
  form: formReducer,
});
const store = configureStore(rootReducer);

export default store;
