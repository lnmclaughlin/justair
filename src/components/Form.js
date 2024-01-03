import React from "react";
import { connect } from "react-redux";

class Form extends React.Component {
  handleChange = (e) => {
    const { name, value } = e.target;
    this.props.updateFormData(name, value);
  };
  handleFormSubmit = (event) => {
    //TODO
    event.preventDefault();
  };
  // handleButtonClick = () => {
  // const [buttonText, setButtonText] = React.useState("Submit");

  // buttonText("Thanks!");

  render() {
    const { formData } = this.props;

    return (
      <div className="form-container">
        <form onSubmit={this.handleFormSubmit}>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={this.handleChange}
              required
            />
          </label>
          <div className="message-container">
            <textarea
              type="text"
              name="message"
              placeholder="message"
              required
            />
          </div>
          <button
            type="submit"
            className="formbtn"
            // onClick={this.handleButtonClick}
          ></button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  formData: state.form.formData,
});

const mapDispatchToProps = (dispatch) => ({
  updateFormData: (field, value) =>
    dispatch({ type: "UPDATE_FORM_DATA", field, value }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
