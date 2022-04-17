import React from "react";
import { Router } from "@reach/router";
import MoviesHeader from "./components/MoviesHeader.jsx";
import MoviesHomePage from "./pages/MoviesHomePage";
import MoviesGoToTop from "./components/MoviesGoToTop";
import MoviesDetailPage from "./pages/MoviesDetailPage.jsx";
import MoviesNotFound from "./pages/MoviesNotFound.jsx";

import { GlobalStyle } from "./styles/GlobalStyle.js";
import "./styles/styling.css";

const App = () => (
  <>
    <MoviesHeader />
    <Router>
      <MoviesHomePage path="/" />
      <MoviesDetailPage path="/:movieId" />
      <MoviesNotFound default />
    </Router>
    <MoviesGoToTop />
    <GlobalStyle />
  </>
);

export default App;
