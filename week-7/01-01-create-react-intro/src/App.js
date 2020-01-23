import React, { Component } from 'react';
import './App.css';
import User from './User';
import Avatar from "./Avatar";


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello Mediamarkt Developers!</h1>
        <User />
        <Avatar />
      </div>
    );
  }
}

export default App;
