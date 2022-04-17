import { Link } from "@reach/router";
import React from "react";
import { StyledNavigation } from "../styles/StyledNavigation";

const NavigationMovies = ({ originalTitle, title, date }) => {
  return (
    <StyledNavigation>
      <div>
        <Link to="/" title="Voltar à home">
          <span className="material-icons">home</span>
          <h4>Voltar</h4>
        </Link>
        {/* <div>
          <h3>{originalTitle}</h3>
          <span>({title})</span>
        </div> */}
      </div>
    </StyledNavigation>
  );
};

export default NavigationMovies;
