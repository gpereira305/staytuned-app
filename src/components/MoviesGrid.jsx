import React from "react";
import { MoviesGridWrapper } from "../styles/MoviesHomePageStyled";

const MoviesGrid = ({ header, children }) => {
  return (
    <MoviesGridWrapper className="fade-in">
      <div>
        <h2
          style={{
            color: "var(--red)",
            textTransform: "uppercase",
            fontWeight: "bold",
          }}
        >
          {header}
        </h2>
      </div>
      <div>{children}</div>
    </MoviesGridWrapper>
  );
};

export default MoviesGrid;
