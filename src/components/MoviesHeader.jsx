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
            <h2>StreamFlix</h2>
          </Link>
        </div>

        <div className="about">
          <Link to="/about">
            <h4>Sobre o app</h4>
          </Link>
        </div>
      </MoviesHeaderContent>
    </MoviesHeaderWrapper>
  );
};

export default MoviesHeader;
