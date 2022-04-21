import React from "react";
import { Router } from "@reach/router";
import MoviesHeader from "./components/MoviesHeader.jsx";
import MoviesHomePage from "./pages/MoviesHomePage";
import MoviesGoToTop from "./components/MoviesGoToTop";
import MoviesDetailPage from "./pages/MoviesDetailPage.jsx";
import MoviesNotFound from "./pages/MoviesNotFound.jsx";
import MoviesAbout from "./pages/MoviesAbout.jsx";
import MoviesFooter from "./pages/MoviesFooter.jsx";
import { GlobalStyled } from "./styles/GlobalStyled.js";

const App = () => {
  return (
    <>
      <MoviesHeader />
      <Router>
        <MoviesHomePage path="/" />
        <MoviesDetailPage path="/:movieId" />
        <MoviesNotFound default />
        <MoviesAbout path="/about" />
      </Router>
      <MoviesFooter />
      <MoviesGoToTop />
      <GlobalStyled />
    </>
  );
};

export default App;
