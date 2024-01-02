// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";

import { rootReducer } from "../reducers/formReducer";
const store = configureStore(rootReducer);

export default store;
