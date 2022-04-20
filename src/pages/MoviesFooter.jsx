import React from "react";
import { MoviesFooterWrapper } from "../styles/GlobalStyled";

const MoviesFooter = () => {
  const footerDate = new Date().getFullYear();

  return (
    <MoviesFooterWrapper>
      <>
        <h6>
          Made with <span class="material-icons">favorite</span> by Giovane
          Pereira
        </h6>
        <span>
          <small>&copy; All Rights Reserved | StreamFlix {footerDate} </small>
        </span>
      </>
    </MoviesFooterWrapper>
  );
};

export default MoviesFooter;
