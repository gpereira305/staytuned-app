import React from "react";
import no_image from "../assets/images/no_image.jpg";
import { imageBaseURL, posterW500, banner } from "../utils/config";
// import { convertMoney, formatDate } from "../utils/helpers";
import MoviesInfoDetail from "./MoviesInfoDetail";
import {
  StyledMovieInfo,
  StyleBgInfo,
  StyledMovieInfoWrapper,
  StyledMoviePoster,
  StyledMovieDetails,
} from "../styles/StyledMovieInfo";

const MoviesInfo = ({ detailedMovieData }) => {
  const { poster_path, backdrop_path, title } = detailedMovieData;

  const background = `url(${imageBaseURL}${banner}${backdrop_path})`;
  const officialPoster = `${imageBaseURL}${posterW500}${poster_path}`;

  return (
    <StyledMovieInfo>
      <StyleBgInfo
        style={{
          backgroundImage: background || no_image,
        }}
      ></StyleBgInfo>
      <StyledMovieInfoWrapper>
        <StyledMoviePoster>
          <img
            className="banner"
            src={
              backdrop_path
                ? `${imageBaseURL}${banner}${backdrop_path}`
                : no_image
            }
            alt={title}
            title={title}
          />
          <img
            className="poster"
            src={poster_path ? officialPoster : no_image}
            alt={title}
            title={title}
          />
        </StyledMoviePoster>

        <StyledMovieDetails>
          <MoviesInfoDetail detailedMovieData={detailedMovieData} />
        </StyledMovieDetails>
      </StyledMovieInfoWrapper>
    </StyledMovieInfo>
  );
};

export default MoviesInfo;
