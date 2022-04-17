import React from "react";
import NavigationMovies from "../components/NavigationMovies";
import InfoMovies from "../components/InfoMovies";
import InfoBarMovies from "../components/InfoBarMovies";
import GridMovies from "../components/GridMovies";
import CastMovies from "../components/CastMovies";
import SpinnerMovies from "../components/SpinnerMovies";
import { useMovieFetch } from "../customHooks/useMoviesFetch";

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
  } = detailedMovieData;

  console.log(detailedMovieData);
  // const formatDate = (rawDate) => {
  //   return rawDate ? rawDate?.split("-").reverse().join("/") : "???";
  // };

  if (fetchLoading) return <SpinnerMovies />;
  if (fetchError) return <div>Um erro ocorreu</div>;

  return (
    <>
      {/* <NavigationMovies
        title={title}
        originalTitle={original_title}
        date={release_date}
      /> */}
      <InfoMovies detailedMovieData={detailedMovieData} />
      <InfoBarMovies />
      <GridMovies>
        <CastMovies />
      </GridMovies>
    </>
  );
};

export default DetailedMovies;
