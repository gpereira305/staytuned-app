import React from "react";
import MoviesInfo from "../components/MoviesInfo";
import MoviesCast from "../components/MoviesCast";
import MoviesSpinner from "../components/MoviesSpinner";
import { useMovieFetch } from "../customHooks/useMoviesFetch";
import MoviesTrailer from "../components/MoviesTrailer";
import MoviesPosters from "../components/MoviesPosters";

const MoviesDetail = ({ movieId }) => {
  const [detailedMovieData, fetchLoading, fetchError] = useMovieFetch(movieId);
  const { results } = detailedMovieData;

  return (
    <>
      {fetchError ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <h1>Occoreu um erro</h1>
        </div>
      ) : (
        <>
          {fetchLoading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <MoviesSpinner />
            </div>
          ) : (
            <>
              <MoviesInfo detailedMovieData={detailedMovieData} />
              {results.length > 0 && (
                <MoviesTrailer detailedMovieData={detailedMovieData} />
              )}
              <MoviesCast detailedMovieData={detailedMovieData} />
              <MoviesPosters detailedMovieData={detailedMovieData} />
            </>
          )}
        </>
      )}
    </>
  );
};

export default MoviesDetail;
