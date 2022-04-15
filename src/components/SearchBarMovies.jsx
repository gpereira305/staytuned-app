import React, { useState, useRef } from "react";
import { FormSearchMovies } from "../styles/StyledSearchBar";

const SearchBarMovies = ({ callback }) => {
  // const [search, setSearch] = useState("");
  const [state, setState] = useState("");
  const timeout = useRef(null);

  const handleSearch = (e) => {
    const { value } = e.target;
    // clearTimeout(timeout.current);
    setState(value);
    callback(value);
    // timeout.current = setTimeout(() => {
    //   callback(value);
    // }, 500);
  };

  return (
    <FormSearchMovies>
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

export default SearchBarMovies;
