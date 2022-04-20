import React from "react";
import styled from "styled-components";

const LoadButton = styled.button`
  background-color: var(--red);
  color: var(--white);
  border: 1px solid var(--red);
  padding: 8px 35px;
  cursor: pointer;
  outline: none;
  border-radius: var(--radius);
`;

const MoviesLoadMoreButton = ({ text, callback }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "10vh",
      }}
    >
      <LoadButton onClick={callback} title="Mostrar mais conteúdo">
        {text}
      </LoadButton>
    </div>
  );
};

export default MoviesLoadMoreButton;
