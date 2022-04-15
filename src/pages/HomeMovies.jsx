import React from "react";
import HeroMovies from "../components/HeroMovies";
import SearchBarMovies from "../components/SearchBarMovies";
import GridMovies from "../components/GridMovies";
import ThumbMovies from "../components/ThumbMovies";
import SpinnerMovies from "../components/SpinnerMovies";
import LoadBtnMovies from "../components/LoadBtnMovies";
import { useHomeFetch } from "../customHooks/useHomeFetch";

const HomeMovies = () => {
  const [{ movies, loading, error }, fetchMovies] = useHomeFetch();

  return (
    <>
      <HeroMovies movies={movies} />
      <SearchBarMovies />
      <GridMovies />
      <ThumbMovies />
      <SpinnerMovies />
      <LoadBtnMovies />
    </>
  );
};

export default HomeMovies;
