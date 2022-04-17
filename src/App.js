import React from "react";
import { Router } from "@reach/router";
import MoviesHeader from "./components/MoviesHeader.jsx";
import HomeMovies from "./pages/HomeMovies";
import DetailedMovies from "./pages/DetailedMovies.jsx";
import NotFoundMovies from "./pages/NotFoundMovies.jsx";

import { GlobalStyle } from "./styles/GlobalStyle.js";
import "./styles/styling.css";

const App = () => (
  <>
    <MoviesHeader />
    <Router>
      <HomeMovies path="/" />
      <DetailedMovies path="/:movieId" />
      <NotFoundMovies default />
    </Router>
    <GlobalStyle />
  </>
);

export default App;
