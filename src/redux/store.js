// src/redux/store.js
import { createStore } from "redux";
import { rootReducer } from "../reducers/formReducer";
const store = createStore(rootReducer);

export default store;
