import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
// import MovieDescription from "./components/MovieDescription";
import React, { useEffect, useState } from "react";
import MovieProvider from "./contexts/MovieProvider";

const App = () => {
  // const [movies, setMovies] = useState([]);
  // const [loading, setLoading] = useState(false);

  // let componentMounted = true;

  // const getAllMovies = async () => {
  //   const url =
  //     "https://itunes.apple.com/us/rss/topmovies/limit=100/json?api_key=a4999a28333d1147dbac0d104526337a";
  //   const response = await fetch(url);
  //   const responseJSON = await response.json();

  //   return responseJSON.feed.entry;
  //   // setMovies(responseJSON.feed.entry);
  // };

  // useEffect(() => {
  //   getAllMovies();
  // }, []);

  //   useEffect(() => {
  //     setLoading(true);
  //     // const someResponse = getAllMovies().then(res => res) // it needs some time
  //     // console.log(someResponse);
  //     // When request is finished:
  //     if (componentMounted){ // (5) is component still mounted?
  //       getAllMovies().then(res => {
  //         setMovies(res); // (1) write data to state
  //       })
  //         setLoading(false); // (2) write some value to state
  //     }
  //     return () => { // This code runs when component is unmounted
  //       setMovies([]);
  //     }
  // }, []);

  return (
    <Router>
      <div className="container-fluid movie-app">
        <Switch>
          <Route exact path="/">
            <MovieProvider>
              <Home />
            </MovieProvider>
          </Route>
          {/* <Route path="/movie/:id">
          <MovieDescription />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
