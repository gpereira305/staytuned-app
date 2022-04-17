import { Link } from "@reach/router";
import React from "react";
import { StyledNavigation } from "../styles/StyledNavigation";

const MoviesDetailNav = ({ originalTitle, title, date }) => {
  return (
    <StyledNavigation>
      <div>
        <Link to="/" title="Voltar à home">
          <span className="material-icons">arrow_back</span>
          <h4>Voltar</h4>
        </Link>
        <div>
          <h1>{originalTitle ? originalTitle : ""}</h1>
        </div>
      </div>
    </StyledNavigation>
  );
};

export default MoviesDetailNav;
