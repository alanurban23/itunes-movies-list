import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const ImageStyled = styled.img`
  width: 15rem;
`;

export const ImageContainerStyled = styled.div`
  position: relative;
  transition: transform 0.2s;

  &:hover {
    cursor: pointer;
    transform: scale(1.2);

    .overlay {
      opacity: 1;
    }
  }

  .overlay {
    position: absolute;
    background: rgba(0, 0, 0, 0.8);
    width: 90%;
    transition: 0.5s ease;
    opacity: 0;
    bottom: 0;
    font-size: 20px;
    text-align: center;
    height: 15%;
  }
`;

const MovieList = (props) => {
  const { movies } = props;
  const FavouriteComponent = props.favouriteComponent;

  return (
    <>
      {movies &&
        movies.map((movie, index) => (
          <ImageContainerStyled
            className="image-container d-flex justify-content-start m-4 w-auto"
            key={index}
          >
            <Link to={`/movie/${movie.id.attributes["im:id"]}`} movie={movie}>
              <ImageStyled src={movie["im:image"][2].label} alt="movie"></ImageStyled>
            </Link>

            <div
              onClick={() => props.handleClickFavourite(movie)}
              className="overlay d-flex align-items-center justify-content-center"
            >
              <FavouriteComponent />
            </div>
          </ImageContainerStyled>
        ))}
    </>
  );
};

export default MovieList;
