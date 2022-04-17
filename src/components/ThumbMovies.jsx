import { Link } from "@reach/router";
import React from "react";
import { StyledMovieThumb } from "../styles/StyledMovieThumb";

const ThumbMovies = ({
  movieImage,
  movieId,
  clickable,
  movieName,
  movieRating,
  movieDate,
}) => {
  return (
    <div className="grid__image fade-in">
      <span title="Média de valiações">{movieRating || "???"}</span>
      <Link to={`/${movieId}`}>
        <StyledMovieThumb>
          <img
            className="clickable"
            src={movieImage}
            alt={movieName}
            title={movieName}
          />
          <div className="grid__image--info">
            <p>{movieName}</p>
            <small>
              {movieDate ? movieDate?.split("-").reverse().join("/") : "???"}
            </small>
          </div>
        </StyledMovieThumb>
      </Link>
    </div>
  );
};

export default ThumbMovies;
