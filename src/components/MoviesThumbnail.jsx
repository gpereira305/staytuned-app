import { Link } from "@reach/router";
import React from "react";
import {
  MoviesGridImage,
  MoviesGridInfo,
} from "../styles/MoviesHomePageStyled";

const MoviesThumbnail = ({
  movieImage,
  movieId,
  movieName,
  movieRating,
  movieDate,
}) => {
  return (
    <MoviesGridImage className="fade-in">
      <span title="Média de valiações">{movieRating || "???"}</span>

      <Link to={`/${movieId}`}>
        <img
          className="clickable"
          src={movieImage}
          alt={movieName}
          title={movieName}
          loading="lazy"
        />
        <MoviesGridInfo className="info">
          <p>{movieName}</p>
          {movieDate ? <small>({movieDate?.slice(0, 4)})</small> : "???"}
        </MoviesGridInfo>
      </Link>
    </MoviesGridImage>
  );
};

export default MoviesThumbnail;
