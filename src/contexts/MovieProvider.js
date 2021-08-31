import React, { useEffect, useState } from "react";
import MovieContext from "./MovieContext";

const MovieProvider = ({ children }) => {
  const [moviesList, setMoviesList] = useState([]);

  const getAllMovies = async () => {
    const url =
      "https://itunes.apple.com/us/rss/topmovies/limit=100/json?api_key=a4999a28333d1147dbac0d104526337a";
    const response = await fetch(url);
    const responseJSON = await response.json();

    setMoviesList(responseJSON.feed.entry);
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  return (
    <MovieContext.Provider value={moviesList}>{children}</MovieContext.Provider>
  );
};

export default MovieProvider;
