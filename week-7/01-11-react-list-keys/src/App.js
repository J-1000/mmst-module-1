import React, { Component } from "react";
import "./App.css";
import  DynamicMoviesList  from './components/dynamicListsDemo/DynamicMoviesList';

class App extends Component {
  render() {
    return (
      <div className="App">
         <DynamicMoviesList />
      </div>
    );
  }
}

export default App;