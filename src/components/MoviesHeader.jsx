import { Link } from "@reach/router";
import React from "react";
import {
  MoviesHeaderContent,
  MoviesHeaderWrapper,
} from "../styles/MoviesHeaderStyled";

const MoviesHeader = () => {
  return (
    <MoviesHeaderWrapper>
      <MoviesHeaderContent>
        <div>
          <Link to="/" title="Logo | Home">
            <span className="material-icons">ondemand_video</span>
            <h2>StayTuned</h2>
          </Link>
        </div>

        <div className="about">
          <div>
            <a
              href="https://www.themoviedb.org/"
              target="_blank"
              rel="noopener noreferrer"
              title="Visitar site TMDb"
            >
              Site TMDb
            </a>
          </div>
          <Link to="/about" title="Sobre o app">
            <h4>Sobre o app</h4>
          </Link>
        </div>
      </MoviesHeaderContent>
    </MoviesHeaderWrapper>
  );
};

export default MoviesHeader;
