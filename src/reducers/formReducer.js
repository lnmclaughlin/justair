import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  form: formReducer,
});

const initialState = {
  formData: {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  },
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_FORM_DATA":
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.field]: action.value,
        },
      };
    default:
      return state;
  }
};

export default formReducer;
