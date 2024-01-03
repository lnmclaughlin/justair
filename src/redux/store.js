import { createStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import formSlice from "./slices/formSlice";

export const rootReducer = combineReducers({
  form: formSlice,
});
const store = createStore(rootReducer);

export default store;
