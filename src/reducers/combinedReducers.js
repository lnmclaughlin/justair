import { combineReducers } from "redux";
import userReducer from "../slices/userSlice";
import formReducer from "../slices/formSlice";

const rootReducer = combineReducers({
  user: userReducer,
  form: formReducer,
  // Add more reducers as needed
});

export default rootReducer;
