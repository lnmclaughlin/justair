import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "../slices/formSlice";

function SupportForm() {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form);

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormData({ field: name, value }));
  };

  return (
    <div className="form-container">
      <h2>Contact Us</h2>
      <form>
        <div className="section-1">
          <label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              maxlength="254"
              required
            />
          </label>
          <label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              maxlength="254"
              required
            />
          </label>
          <label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              maxlength="254"
              required
            />
          </label>
        </div>
        <div className="section-2">
          <textarea
            type="text"
            name="message"
            placeholder="Message"
            maxlength="5000"
            required
          />
        </div>
        <button type="submit" className="formbtn" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default SupportForm;
