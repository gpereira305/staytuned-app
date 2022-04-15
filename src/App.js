import React from "react";
import HeaderMovies from "./components/HeaderMovies.jsx";
import HomeMovies from "./pages/HomeMovies";
import "./styles/styling.css";

const App = () => (
  <div>
    <HeaderMovies />
    <HomeMovies />
  </div>
);

export default App;
