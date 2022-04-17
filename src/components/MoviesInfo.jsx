import React from "react";
import no_image from "../assets/images/no_image.jpg";
import { imageBaseURL, posterW500, banner } from "../utils/config";
import MoviesInfoDetail from "./MoviesInfoDetail";
import {
  MovieInfoSection,
  MovieInfoBg,
  MovieInfoWrapper,
  MovieInfoPoster,
} from "../styles/MoviesDetailStyled";

const MoviesInfo = ({ detailedMovieData }) => {
  const { poster_path, backdrop_path, title } = detailedMovieData;

  const background = `url(${imageBaseURL}${banner}${backdrop_path})`;
  const officialPoster = `${imageBaseURL}${posterW500}${poster_path}`;

  return (
    <MovieInfoSection>
      <MovieInfoBg
        style={{
          backgroundImage: background || no_image,
        }}
      ></MovieInfoBg>

      <MovieInfoWrapper>
        <MovieInfoPoster>
          <img
            className="poster"
            src={poster_path ? officialPoster : no_image}
            alt={title}
            title={title}
          />
        </MovieInfoPoster>

        <MoviesInfoDetail detailedMovieData={detailedMovieData} />
      </MovieInfoWrapper>
    </MovieInfoSection>
  );
};

export default MoviesInfo;
