import React from "react";
import { Container } from "../styles/GlobalStyled";
import {
  MovieHeaderTitle,
  MovieTrailerGrid,
} from "../styles/MoviesDetailStyled";

const MoviesTrailer = ({ detailedMovieData }) => {
  const { results } = detailedMovieData;
  const trailers = results.length > 5 ? results.slice(0, 5) : results;

  return (
    <Container>
      <MovieHeaderTitle>
        {trailers.length > 1 ? "Trailers" : "Trailer"}
      </MovieHeaderTitle>

      <MovieTrailerGrid>
        {trailers.map((trailer, i) => (
          <Trailer trailer={trailer} key={i} />
        ))}
      </MovieTrailerGrid>
    </Container>
  );
};

const Trailer = ({ trailer }) => {
  return (
    <iframe
      width={"334"}
      height={"200"}
      src={`https://www.youtube.com/embed/${trailer.key}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  );
};

export default MoviesTrailer;
