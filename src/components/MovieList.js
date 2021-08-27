import React from "react";
import { Link } from "react-router-dom";

const MovieList = (props) => {
  const { movies } = props;
  const FavouriteComponent = props.favouriteComponent;

  console.log(props);

  return (
    <>
      {movies &&
        movies.map((movie, index) => (
          <div
            className="image-container d-flex justify-content-start m-3 w-auto"
            key={index}
          >
            <Link to={`/movie/${movie.id.attributes['im:id']}`} movie={movie}>
              <img src={movie["im:image"][2].label} alt="movie"></img>
            </Link>

            <div
              onClick={() => props.handleClickFavourite(movie)}
              className="overlay d-flex align-items-center justify-content-center"
            >
              <FavouriteComponent />
            </div>
          </div>
        ))}
    </>
  );
};

export default MovieList;
