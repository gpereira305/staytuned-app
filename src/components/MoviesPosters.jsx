import React, { useState } from "react";
import { Container, MainButton } from "../styles/GlobalStyle";
import { imageBaseURL, posterW500 } from "../utils/config";
import no_image from "../assets/images/no_image.jpg";
import {
  MovieHeaderTitle,
  MoviePosterGrid,
} from "../styles/MoviesDetailStyled";

const MoviesPosters = ({ detailedMovieData }) => {
  const [visiblePoster, setVisiblePoster] = useState(3);
  const { posters } = detailedMovieData;

  const handleLoad = () => {
    setVisiblePoster((prevCast) => prevCast + 3);
  };

  return (
    <Container>
      <MovieHeaderTitle>Posters</MovieHeaderTitle>
      <MoviePosterGrid>
        {posters.slice(0, visiblePoster).map((item, i) => (
          <img
            key={i}
            src={
              item.file_path
                ? `${imageBaseURL}${posterW500}${item.file_path}`
                : no_image
            }
            alt="Poster do filme"
            title="Poster"
          />
        ))}
      </MoviePosterGrid>
      {/* {fetchLoading && <MoviesSpinner />} */}
      {posters.slice(0, visiblePoster).length < posters.length ? (
        <MainButton onClick={handleLoad}>
          <button type="button" title="Mostar mais">
            Mostrar mais
          </button>
        </MainButton>
      ) : (
        ""
      )}
    </Container>
  );
};

export default MoviesPosters;
