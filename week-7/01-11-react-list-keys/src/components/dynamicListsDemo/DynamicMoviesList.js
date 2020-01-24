import React, { Component } from "react";
import ImprovedCard from "./ImprovedCard";
import mongoose from "mongoose";
class DynamicMoviesList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {
          _id: new mongoose.Types.ObjectId(),
          title: "The Godfather",
          director: "Francis Coppola"
        },
        {
          _id: new mongoose.Types.ObjectId(),
          title: "Star Wars",
          director: "Rian Johnson"
        },
        {
          _id: new mongoose.Types.ObjectId(),
          title: "The Shawshank Redemption",
          director: "Frank Darabont"
        }
      ]
    };
  }
  deleteMovieHandler = movieId => {
    console.log("Delete Movie with Id:" + movieId);
    this.setState({
      movies: this.state.movies.filter(movie => movie._id !== movieId)
    });
  };

  render() {
    // leave this console.log() so we can keep track of our state inside our browser's console
    console.log(this.state.movies);
    return (
      <div>
        {this.state.movies.map(oneMovie => {
          //return <ImprovedCard key={oneMovie._id} _id={oneMovie._id} title={oneMovie.title} director={oneMovie.director} />
          return <ImprovedCard key={oneMovie._id} {...oneMovie} clickToDelete={() => this.deleteMovieHandler(oneMovie._id)}/>;
        })}
      </div>
    );
  }
}

export default DynamicMoviesList;
