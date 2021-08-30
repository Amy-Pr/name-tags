import React, { Component } from "react";
import NameTagList from "./NameTagList.js";
import UserInput from "./UserInput.js";

class App extends Component {
  state = {
    names: []
  };

  componentDidMount() {
    const savedNamesString = localStorage.getItem("savedNames");
    if (savedNamesString) {
      const savedNames = JSON.parse(savedNamesString);
      //console.log({names:savedNames});
      console.log(savedNames);
      this.setState(savedNames); //alternative this.setState({names:savedNames})
    }
  }

  componentDidUpdate() {
    const savedNamesString = JSON.stringify(this.state); //alternative this.state.names
    localStorage.setItem("savedNames", savedNamesString);
  }

  addNameMethod = (name) => {
    const newNames = [name, ...this.state.names]; //can this be done with a push method at all?
    this.setState({ names: newNames });
  };
  removeName = (clickedIndex) => {
    // to learn how the .filter method works, check out https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    const filterCallback = (_, index) => index !== clickedIndex;
    const newNames = this.state.names.filter(filterCallback);
    this.setState({ names: newNames });
  };
  render() {
    return (
      <div className="App">
        <h1>Name Tag Generator</h1>
        <UserInput addNameProps={this.addNameMethod} />
        {/*addNameProps is basically replaced with addNameMethod in the UserInput component and that's why it works!*/}
        <NameTagList names={this.state.names} removeName={this.removeName} />
      </div>
    );
  }
}

export default App;
