import React, { Component } from "react";
import ImprovedCard from "./ImprovedCard";
import mongoose from "mongoose";
class DynamicMoviesList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [
        { _id: new mongoose.Types.ObjectId(), title: "The Godfather", director: "Francis Coppola", hasOscars: true, IMDbRating: 9.2 },
        { _id: new mongoose.Types.ObjectId(), title: "Star Wars", director: "Rian Johnson", hasOscars: true, IMDbRating: 8.7 },
        { _id: new mongoose.Types.ObjectId(), title: "The Shawshank Redemption", director: "Frank Darabont", hasOscars: false, IMDbRating: 9.3 }
      ],
      showOscarAwarded: false // <== add
    };
  }
  toggleMovies = () => {
    this.setState({ showOscarAwarded: !this.state.showOscarAwarded })
  }

  deleteMovieHandler = movieId => {
    console.log("Delete Movie with Id:" + movieId);
    this.setState({
      movies: this.state.movies.filter(movie => movie._id !== movieId)
    });
  };

  addHarryPotter = () => {
    const moviesCopy = [...this.state.movies]; // <== notice the spread operator here!
    moviesCopy.push({ _id: new mongoose.Types.ObjectId(), title: "Harry Potter", director: "No idea" });
    this.setState({
      movies: moviesCopy
    })
  }

  render() {
    // leave this console.log() so we can keep track of our state inside our browser's console
    console.log(this.state.movies);
    const showOscarAwarded = this.state.showOscarAwarded;
    const filteredMovies = this.state.movies.filter(theMovie => theMovie.hasOscars === showOscarAwarded);
    const filteredMoviesJSX = filteredMovies.map(
      (oneMovie) => {
        return <ImprovedCard key={oneMovie._id} {...oneMovie} clickToDelete={this.deleteMovieHandler} />
      }
    )

    return (
      <div>
        {filteredMoviesJSX}
        <button onClick={this.addHarryPotter}>Add Harry Potter</button>
        <button onClick={this.toggleMovies}>
          {this.state.showOscarAwarded ? 'Hide Oscar Awarded' : 'Show Oscar Awarded'}
        </button>

      </div>
    );
  }
}

export default DynamicMoviesList;
