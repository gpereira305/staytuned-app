import React, { useState } from "react";
import { FormSearchMovies } from "../styles/MoviesSearchBarStyled";

const MoviesSearchBar = ({ callback }) => {
  const [state, setState] = useState("");

  const handleSearch = (e) => {
    const { value } = e.target;
    setState(value);
    callback(value);
  };

  return (
    <FormSearchMovies className="fade-in">
      <div>
        <input
          type="text"
          onChange={handleSearch}
          value={state}
          className="input"
          placeholder="Pesquisar filme..."
        />
        <span className="material-icons">search</span>
      </div>
    </FormSearchMovies>
  );
};

export default MoviesSearchBar;
