import React, { useState } from "react";
import { Container, MainButton } from "../styles/GlobalStyled";
import { imageBaseURL, posterW500 } from "../utils/config";
import no_image from "../assets/images/no_image.jpg";
import {
  MovieHeaderTitle,
  MoviePosterGrid,
} from "../styles/MoviesDetailStyled";

const MoviesPosters = ({ detailedMovieData }) => {
  const [visiblePoster, setVisiblePoster] = useState(6);
  const { posters, backdrops } = detailedMovieData;

  console.log(backdrops, posters);

  const handleLoad = () => {
    setVisiblePoster((prevCast) => prevCast + 6);
  };

  return (
    <Container>
      <>
        <MovieHeaderTitle>
          {posters.length > 1 ? "Posters" : "Poster"}
        </MovieHeaderTitle>
        <MoviePosterGrid>
          {[...backdrops, ...posters].slice(0, visiblePoster).map((item, i) => (
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
        {[...backdrops, ...posters].slice(0, visiblePoster).length <
        [...backdrops, ...posters].length ? (
          <MainButton>
            <button type="button" title="Mostar mais" onClick={handleLoad}>
              Mostrar mais
            </button>
          </MainButton>
        ) : (
          ""
        )}

        <br />
        <div></div>
      </>
    </Container>
  );
};

export default MoviesPosters;
