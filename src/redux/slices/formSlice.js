// src/redux/slices/formSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

// Create a slice
const formSlice = createSlice({
  name: "form", // Slice name
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    // Add more reducer functions as needed
  },
});

// Export the generated reducer and action creators
export const { updateFormData } = formSlice.actions;
export default formSlice.reducer;
