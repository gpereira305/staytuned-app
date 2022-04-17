import React from "react";
import MoviesDetailNav from "../components/MoviesDetailNav";
import MoviesInfo from "../components/MoviesInfo";
import MoviesGrid from "../components/MoviesGrid";
import MoviesCast from "../components/MoviesCast";
import MoviesSpinner from "../components/MoviesSpinner";
import { useMovieFetch } from "../customHooks/useMoviesFetch";
import MoviesTrailer from "../components/MoviesTrailer";

const DetailedMovies = ({ movieId }) => {
  const [detailedMovieData, fetchLoading, fetchError] = useMovieFetch(movieId);

  const {
    poster_path,
    backdrop_path,
    original_title,
    title,
    budget,
    cast,
    crew,
    genres,
    homepage,
    logos,
    original_language,
    overview,
    backdrops,
    posters,
    production_companies,
    production_countries,
    release_date,
    revenue,
    runtime,
    spoken_languages,
    status,
    tagline,
    vote_average,
    results,
  } = detailedMovieData;

  // const formatDate = (rawDate) => {
  //   return rawDate ? rawDate?.split("-").reverse().join("/") : "???";
  // };

  if (fetchLoading) return <MoviesSpinner />;
  if (fetchError) return <div>Um erro ocorreu</div>;

  return (
    <>
      <MoviesDetailNav
        title={title}
        originalTitle={original_title}
        date={release_date}
      />
      <MoviesInfo detailedMovieData={detailedMovieData} />
      {results.length > 0 && (
        <MoviesTrailer detailedMovieData={detailedMovieData} />
      )}
      <MoviesGrid>
        <MoviesCast />
      </MoviesGrid>
    </>
  );
};

export default DetailedMovies;
