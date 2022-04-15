import React from "react";
import { StyledGrid, StyledGridContent } from "../styles/StyledGrid";

const GridMovies = ({ header, children }) => {
  return (
    <StyledGrid className="fade-in">
      <div style={{ minHeight: "10vh", display: "flex", alignItems: "center" }}>
        <h1
          style={{
            color: "var(--red)",
            textTransform: "uppercase",
            fontWeight: "bold",
          }}
        >
          {header}
        </h1>
      </div>
      <StyledGridContent>{children}</StyledGridContent>
    </StyledGrid>
  );
};

export default GridMovies;
