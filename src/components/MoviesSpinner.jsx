import React from "react";
import {
  SpinnerWrapper,
  MoviesSpinnerStyled,
} from "../styles/MoviesSpinnerStyled";

const MoviesSpinner = () => {
  return (
    <SpinnerWrapper>
      <MoviesSpinnerStyled />
      <h3>Carregando...</h3>
    </SpinnerWrapper>
  );
};

export default MoviesSpinner;
