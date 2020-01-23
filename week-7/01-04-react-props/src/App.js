import React, { Component } from "react";
import User from "./components/User";
import logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Hallo Component Entwickler! </h1>
        <User firstName="Patrick" />
      </div>
    );
  }
}

export default App;