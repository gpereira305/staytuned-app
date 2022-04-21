import { Link } from "@reach/router";
import React from "react";
import { Helmet } from "react-helmet";

const MoviesNotFound = () => {
  return (
    <div>
      <Helmet>
        <title>StayTuned | Not Found</title>
      </Helmet>
      <div>
        <h1>Nada encontado aqui</h1>
        <Link to="/">Volar à home page</Link>
      </div>
    </div>
  );
};

export default MoviesNotFound;
