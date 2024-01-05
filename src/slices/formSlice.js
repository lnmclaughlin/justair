import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

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

export const { updateFormData } = formSlice.actions;
export default formSlice.reducer;
