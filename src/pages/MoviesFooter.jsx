import React from "react";
import { MoviesFooterWrapper } from "../styles/GlobalStyled";

const MoviesFooter = () => {
  const footerDate = new Date().getFullYear();

  return (
    <MoviesFooterWrapper>
      <>
        <div>
          <h5>Footer</h5>
        </div>
        <span>
          <small>&copy; All Rights Reserved | StreamFlix {footerDate} </small>
        </span>
      </>
    </MoviesFooterWrapper>
  );
};

export default MoviesFooter;
