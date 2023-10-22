import React from "react";

const MoviesGrid = ({ header, children }) => {
  return (
       <>
        <h2 style={{
            color: "var(--red)",
            textTransform: "uppercase",
            fontWeight: "bold"}}
        >
          {header}
        </h2>
        {children}
       </>
  );
};

export default MoviesGrid;
