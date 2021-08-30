import React, { Component } from "react";

class UserInput extends Component {
  //Even though we are passing props, we don't have to write it in the stateful component?
  state = { name: "" };
  updateName = (event) => {
    this.setState({ name: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addNameProps(this.state.name); //We're calling the method and passing it as props!! It's going to be assigned the addNameMethod as it's value in the App component!
    this.setState({ name: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Add a new name here..."
          value={this.state.name}
          onChange={this.updateName}
        />
        <input type="submit" value="Create Name Tag" />
      </form>
    );
  }
}

export default UserInput;
