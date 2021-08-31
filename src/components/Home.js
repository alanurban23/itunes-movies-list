import { useContext, useEffect, useState } from "react";
import MovieContext from "../contexts/MovieContext";
import AddFavourites from "./AddFavourites";
import MovieList from "./MovieList";
import MovieListHeading from "./MovieListHeading";
import Pagination from "./Pagination";
import RemoveFavourites from "./RemoveFavourites";
import SearchBox from "./SearchBox";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favourites, setFavourites] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(10);
  const moviesListContext = useContext(MovieContext);

  const indexOfLastMovies = currentPage * moviesPerPage;
  const indexOfFirstMovies = indexOfLastMovies - moviesPerPage;

  const getMovieRequest = (searchValue) => {
    if (searchValue) {
      const filtered = moviesListContext.filter((el) => {
        const name = el["im:name"].label.toLowerCase();
        const searchedQuery = searchValue.toLowerCase();

        return name.includes(searchedQuery);
      });
      setMovies(filtered);
    } else {
      const currentMovies = moviesListContext.slice(
        indexOfFirstMovies,
        indexOfLastMovies
      );
      setMovies(currentMovies);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [moviesListContext, searchValue, currentPage]);

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem("react-movie-app-favourites")
    );
    setFavourites(movieFavourites);
  }, []);

  const setPaginateNumber = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) =>
        favourite.id.attributes["im:id"] !== movie.id.attributes["im:id"]
    );

    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-app-favourites", JSON.stringify(items));
  };

  return (
    <div className="home">
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      <Pagination
        moviesPerPage={moviesPerPage}
        totalMovies={moviesListContext.length}
        paginate={setPaginateNumber}
      />
      <div className="row d-flex align-item-center my-4">
        <MovieListHeading heading="Movies" />
      </div>
      <div className="row">
        <MovieList
          movies={movies}
          handleClickFavourite={addFavouriteMovie}
          favouriteComponent={AddFavourites}
        />
      </div>
      <div className="row d-flex align-item-center my-4">
        <MovieListHeading heading="Favourites" />
      </div>
      <div className="row">
        <MovieList
          movies={favourites}
          handleClickFavourite={removeFavouriteMovie}
          favouriteComponent={RemoveFavourites}
        />
      </div>
    </div>
  );
};

export default Home;
