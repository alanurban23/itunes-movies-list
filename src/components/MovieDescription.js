import React, { useContext, useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { MovieContext } from "../contexts/MovieContext";

const MovieDescription = (props) => {
  const moviesListData = useContext(MovieContext);
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  //   const history = useHistory();
  
  const getMovie = () => {
    if (moviesListData) {
      const movieFiltered = moviesListData.find(
        (el) => el.id.attributes["im:id"] === id
        );
        console.log(movieFiltered);
        setMovie(movieFiltered);
      }
    };
    
    useEffect(() => {
      getMovie();

    return () => {
      setMovie({});
    };
  }, [moviesListData]);

  return (
    <div class="container-fluid">
      <span>AAA {movie && movie["im:name"].label}</span>

      {/* <div className="row mx-5 mt-5">
        <h1 className='mb-4'>{movie["im:name"].label}</h1>
        <div className="col-2">
          <img src={movie["im:image"][2].label} alt="" />
        </div>
        <div className="col-6">
          <p>{movie.summary.label}</p>
        </div>
      </div> */}
      {/* <div className="row row-cols-1 justify-content-md-center mx-5 mt-2">
        <div className="col">
          <span className="text-warning">Category: </span>
          <span>{movie.lenght ? movie.category.attributes.label : ''}</span>
        </div>
        <div className="col">
          <span className="text-warning">Artist: </span>
          <span>{movie.lenght ? movie["im:artist"].label : ''}</span>
        </div>
        <div className="col">
          <span className="text-warning">Price: </span>
          <span>{movie.lenght ? movie["im:price"].label : ''}</span>
        </div>
        <div className="col">
          <span className="text-warning">Rental Price: </span>
          <span>{movie.lenght ? movie["im:rentalPrice"].label : ''}</span>
        </div>
        <div className="col">
          <span className="text-warning">Release Date: </span>
          <span>{movie.lenght ? movie["im:releaseDate"].attributes.label : ''}</span>
        </div>
      </div> */}
    </div>
  );
};

export default MovieDescription;
