import React from "react";
import { StyledLoadMoreBtn } from "../styles/StyledLoadMoreBtn";

const MoviesLoadMoreButton = ({ text, callback }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "15vh",
      }}
    >
      <StyledLoadMoreBtn type="button" onClick={callback}>
        {text}
      </StyledLoadMoreBtn>
    </div>
  );
};

export default MoviesLoadMoreButton;
