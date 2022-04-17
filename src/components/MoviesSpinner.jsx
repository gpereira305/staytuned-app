import React from "react";
import { SpinnerWrapper, StyledSpinner } from "../styles/StyledSpinner";

const MoviesSpinner = () => {
  return (
    <SpinnerWrapper>
      <StyledSpinner />
      <h3>Carregando...</h3>
    </SpinnerWrapper>
  );
};

export default MoviesSpinner;
