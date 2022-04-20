import React, { useEffect } from "react";
import MoviesInfo from "../components/MoviesInfo";
import MoviesCast from "../components/MoviesCast";
import MoviesSpinner from "../components/MoviesSpinner";
import { useMovieFetch } from "../customHooks/useMoviesFetch";
import MoviesTrailer from "../components/MoviesTrailer";
import MoviesPosters from "../components/MoviesPosters";
import MoviesSimilar from "../components/MoviesSimilar";

// função para a página renderizar no topo
const jumpToTop = () => {
  window.scrollTo({
    top: 0,
  });
};

const MoviesDetailPage = ({ movieId }) => {
  const [detailedMovieData, fetchLoading, fetchError] = useMovieFetch(movieId);
  const { results } = detailedMovieData;

  useEffect(() => {
    jumpToTop();
  }, []);

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
          <h1>Ocorreu um erro</h1>
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
              <MoviesSimilar detailedMovieData={detailedMovieData} />
            </>
          )}
        </>
      )}
    </>
  );
};

export default MoviesDetailPage;
