import React, { useState } from "react";
import { FormSearchMovies } from "../styles/StyledSearchBar";

const MoviesSearchBar = ({ callback }) => {
  // const [search, setSearch] = useState("");
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
