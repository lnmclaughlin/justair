import { combineReducers } from "redux";
import formReducer from "../slices/formSlice";

const rootReducer = combineReducers({
  form: formReducer,
});

export default rootReducer;
