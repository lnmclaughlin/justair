import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/combinedReducers";

const store = configureStore({
  reducer: rootReducer,
  // Add middleware, enhancers, etc., as needed
});

export default store;
