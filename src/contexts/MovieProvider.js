import { Component } from "react";
import MovieContext from "./MovieContext";

export class MovieProvider extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    const getAllMovies = async () => {
      const url =
        "https://itunes.apple.com/us/rss/topmovies/limit=100/json?api_key=a4999a28333d1147dbac0d104526337a";
      const response = await fetch(url);
      const responseJSON = await response.json();
  
      this.state.movies = responseJSON.feed.entry;
      console.log(this.state.movies);
      // return responseJSON.feed.entry;
      // setMovies(responseJSON.feed.entry);
    };

    getAllMovies();
  }

  render() {
    return (
      <MovieContext.Provider
        value={this.state.movies}
      >
        {this.props.children}
      </MovieContext.Provider>
    );
  }
}

export default MovieProvider;