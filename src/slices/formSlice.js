import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
  isSubmitting: false,
  isSuccess: false,
  isError: false,
  errorMessage: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    submitForm: (state) => {
      state.isSubmitting = true;
      state.isSuccess = false;
      state.isError = false;
      state.errorMessage = "";
    },
    submitFormSuccess: (state) => {
      state.isSubmitting = false;
      state.isSuccess = true;
      state.isError = false;
      state.errorMessage = "";
    },
    submitFormError: (state, action) => {
      state.isSubmitting = false;
      state.isSuccess = false;
      state.isError = true;
      state.errorMessage = action.payload;
    },

    resetForm: (state) => {
      return initialState;
    },
  },
});
export const {
  updateFormData,
  submitForm,
  submitFormSuccess,
  submitFormError,
  resetForm,
} = formSlice.actions;
export default formSlice.reducer;
