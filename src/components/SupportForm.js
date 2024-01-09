import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateFormData,
  submitForm,
  submitFormSuccess,
  submitFormError,
  resetForm,
} from "../slices/formSlice";

const SupportForm = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormData({ field: name, value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    dispatch(submitForm());

    // API call to create actual support ticket goes here
    try {
      // Replace this with your actual API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      dispatch(submitFormSuccess());
    } catch (error) {
      dispatch(
        submitFormError("Failed to create support ticket. Please try again.")
      );
    }
  };

  const handleReset = () => {
    dispatch(resetForm());
  };

  return (
    <div className="form-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="First Name">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              maxlength="254"
              autoComplete="true"
              aria-describedby="First-Name"
              required
            />
          </label>
          <label htmlFor="Last Name">
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              maxlength="254"
              autoComplete="true"
              aria-describedby="Last Name"
              required
            />
          </label>
          <label htmlFor="Email Address">
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              maxlength="254"
              autoComplete="true"
              aria-describedby="Email Address"
              required
            />
          </label>
        </div>
        <div className="message-container">
          <textarea
            type="text"
            name="message"
            value={formData.message}
            placeholder="Message"
            maxlength="5000"
            onChange={handleChange}
            autoComplete="true"
            aria-describedby="Message"
            required
          />
        </div>
        <button
          htmlFor="Submit Button"
          aria-describedby="Submit Button"
          className="formbtn"
          type="submit"
          disabled={formData.isSubmitting}
        >
          {formData.isSubmitting ? "Submitting..." : "Submit"}
        </button>
        {formData.isSuccess && (
          <p style={{ color: "#fff" }}>Support ticket created successfully!</p>
        )}
        {formData.isError && (
          <p style={{ color: "#df1b1b" }}>{formData.errorMessage}</p>
        )}
        <button
          className="formbtn reset"
          htmlFor="Reset Button"
          aria-describedby="Reset Button"
          type="button"
          onClick={handleReset}
        >
          Reset Form
        </button>
      </form>
    </div>
  );
};
export default SupportForm;
