import React, { Component } from "react";
import "./contact.css";
import Button from "../../Widgets/Button";

class Form extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

//   handleChange=(e)=>{
//       this.setState({
//           [e.target.name]: e.target.value
//       });
//   }

  nameChangeHandler = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  emailChangeHandler = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  phoneChangeHandler = (e) => {
    this.setState({
      phone: e.target.value,
    });
  };

  messageChangeHandler = (e) => {
    this.setState({
      message: e.target.value,
    });
  };

  formSubmitHandler = (e) => {
      e.preventDefault();
      console.log(this.state);
  };

  render() {
    return (
      <div className="Form">
        <h1>Contact Us</h1>
        <form onSubmit={this.formSubmitHandler}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={this.nameChangeHandler}
          />
          <input
            type="text"
            name="email"
            placeholder="E-mail"
            onChange={this.emailChangeHandler}
          />
          <input
            type="text"
            name="Phone"
            placeholder="Phone"
            onChange={this.phoneChangeHandler}
          />
          <textarea
            name="message"
            placeholder="Message"
            onChange={this.messageChangeHandler}
          ></textarea>

        </form>
          <Button type="submit">SUBMIT</Button>
      </div>
    );
  }
}

export default Form;
