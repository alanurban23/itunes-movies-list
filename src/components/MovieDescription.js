import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieContext from "../contexts/MovieContext";
import { ImageStyled } from "./MovieList";

const MovieDescription = (props) => {
  const moviesListContext = useContext(MovieContext);
  const [movie, setMovie] = useState();
  const { id } = useParams();

  const getMovie = () => {
    if (moviesListContext) {
      const movieFiltered = moviesListContext.find(
        (el) => el.id.attributes["im:id"] === id
      );
      console.log(movieFiltered);
      setMovie(movieFiltered);
    }
  };

  useEffect(() => {
    getMovie();
  }, [moviesListContext, movie]);

  return (
    <div class="container-fluid">
      {movie && (
        <div>
          <div className="row mx-5 mt-5">
            <h1 className="mb-4">
              {movie["im:name"] && movie["im:name"].label}
            </h1>
            <div className="col-2">
              <ImageStyled
                src={movie["im:image"] && movie["im:image"][2].label}
                alt=""
              />
            </div>
            <div className="col-6">
              <p>{movie.summary.label}</p>
            </div>
          </div>
          <div className="row row-cols-1 justify-content-md-center mx-5 mt-2">
            <div className="col">
              <span className="text-warning">Category: </span>
              <span>{movie.category.attributes.label}</span>
            </div>
            <div className="col">
              <span className="text-warning">Artist: </span>
              <span>{movie["im:artist"] && movie["im:artist"].label}</span>
            </div>
            <div className="col">
              <span className="text-warning">Price: </span>
              <span>{movie["im:price"] && movie["im:price"].label}</span>
            </div>
            <div className="col">
              <span className="text-warning">Rental Price: </span>
              <span>
                {movie["im:rentalPrice"] && movie["im:rentalPrice"].label}
              </span>
            </div>
            <div className="col">
              <span className="text-warning">Release Date: </span>
              <span>
                {movie["im:releaseDate"] &&
                  movie["im:releaseDate"].attributes.label}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDescription;
