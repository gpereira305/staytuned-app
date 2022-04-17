import { Link } from "@reach/router";
import React from "react";

const NotFoundMovies = () => {
  return (
    <div>
      <div>
        <h1>Nada encontado aqui</h1>
        <Link to="/">Volar à home page</Link>
      </div>
    </div>
  );
};

export default NotFoundMovies;
