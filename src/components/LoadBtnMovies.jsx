import React from "react";
import { StyledLoadMoreBtn } from "../styles/StyledLoadMoreBtn";

const LoadBtnMovies = ({ text, callback }) => {
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

export default LoadBtnMovies;
