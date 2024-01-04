import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "../redux/slices/formSlice";

function Form() {
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
        <label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
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
            required
          />
        </label>
        <div className="message-container">
          <textarea type="text" name="message" placeholder="Message" required />
        </div>
        <button type="submit" className="formbtn" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
