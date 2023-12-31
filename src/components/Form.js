import React from "react";
import { connect } from "react-redux";

class Form extends React.Component {
  handleChange = (e) => {
    const { name, value } = e.target;
    this.props.updateFormData(name, value);
  };

  render() {
    const { formData } = this.props;
  }

  handleFormSubmit = (event) => {
    //TODO
    event.preventDefault();
  };

  handleButtonClick = () => {
    buttonText("Thanks!");

    return (
      <form onSubmit={this.handleFormSubmit}>
        <h2>Contact Us</h2>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            required
            onChange={this.handleChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            required
            onChange={this.handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={formData.email}
            required
            onChange={this.handleChange}
          />
        </label>
        <textarea type="text" name="message" placeholder="message" required />
        <button
          type="submit"
          className="formbtn"
          onClick={this.handleButtonClick}
        >
          {" "}
        </button>
      </form>
    );
  };
}

const mapStateToProps = (state) => ({
  formData: state.form.formData,
});

const mapDispatchToProps = (dispatch) => ({
  updateFormData: (field, value) =>
    dispatch({ type: "UPDATE_FORM_DATA", field, value }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
