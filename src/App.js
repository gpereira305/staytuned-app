import React from "react";
import HeaderMovies from "./components/HeaderMovies.jsx";
import HomeMovies from "./pages/HomeMovies";
import { GlobalStyle } from "./styles/GlobalStyle.js";
import "./styles/styling.css";

const App = () => (
  <div>
    <HeaderMovies />
    <HomeMovies />
    <GlobalStyle />
  </div>
);

export default App;
