import { Link } from "@reach/router";
import React from "react";

const MoviesHeader = () => {
  return (
    <div className="header">
      <div className="header__wrapper">
        <div className="header__content">
          <Link to="/" title="Logo | Home">
            <span className="material-icons">ondemand_video</span>
            <h2>StreamFlix</h2>
          </Link>
        </div>

        <div className="header__about">
          <h3>About the app</h3>
        </div>
      </div>
    </div>
  );
};

export default MoviesHeader;
