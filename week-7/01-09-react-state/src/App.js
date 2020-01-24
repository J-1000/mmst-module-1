import React, { Component } from "react";
import "./App.css";
import User from "./components/User";

class App extends Component {
  state = {
    userA: {
      firstName: "Harper",
    },
    userB: {
      firstName: "Ana",
    },
    clickCount: 0,
    backColor: "yellow"
  };

  colorMapper = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  clickHandler = () => {
    const newCount = this.state.clickCount + 1;

    if (newCount !== 5) {
      this.setState({
        clickCount: newCount,
        backColor: this.colorMapper()
      });
    } else {
      this.setState({
        clickCount: newCount,
        backColor: "yellow",
        userA: { firstName: "Jon"},
        userB: { firstName: "Susanne" }
      });
    }
  };


  render() {
    console.log("render aufgerufen");
    return (
      <div className="App">
        <h1> Hello Ironhackers! </h1>
        <p>Count is: {this.state.clickCount}</p>
      
        <button onClick={this.clickHandler}>Klick mich</button>
        <User
          theColor={this.state.backColor}
          firstName={this.state.userA.firstName}
        />
        <User
          theColor={this.state.backColor}
          firstName={this.state.userB.firstName}
        />     </div>
    );
  }
}

export default App;
