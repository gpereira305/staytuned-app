import { Link } from "@reach/router";
import React from "react";
import {
  MoviesGridImage,
  MoviesGridInfo,
} from "../styles/MoviesHomePageStyled";

const MoviesThumbnail = ({
  movieImage,
  movieId,
  clickable,
  movieName,
  movieRating,
  movieDate,
}) => {
  return (
    <MoviesGridImage>
      <span title="Média de valiações">{movieRating || "???"}</span>
      <Link to={`/${movieId}`}>
        <div>
          <img
            className="clickable"
            src={movieImage}
            alt={movieName}
            title={movieName}
          />
          <MoviesGridInfo className="info">
            <p>{movieName}</p>
            {movieDate ? <small>({movieDate?.slice(0, 4)})</small> : "???"}
          </MoviesGridInfo>
        </div>
      </Link>
    </MoviesGridImage>
  );
};

export default MoviesThumbnail;
