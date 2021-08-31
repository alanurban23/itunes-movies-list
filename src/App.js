import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieDescription from "./components/MovieDescription";
import Home from "./components/Home";
import MovieProvider from "./contexts/MovieProvider";

const App = () => {
  return (
    <Router>
      <div className="container-fluid movie-app">
        <Switch>
          <Route exact path="/" component={Home}>
            <MovieProvider>
              <Home />
            </MovieProvider>
          </Route>
          <Route path="/movie/:id">
            <MovieProvider>
              <MovieDescription />
            </MovieProvider>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
