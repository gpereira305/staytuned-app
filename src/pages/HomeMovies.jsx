import React, { useState } from "react";
import MoviesHero from "../components/MoviesHero";
import MoviesSearchBar from "../components/MoviesSearchBar";
import MoviesGrid from "../components/MoviesGrid";
import MoviesThumbnail from "../components/MoviesThumbnail";
import MoviesSpinner from "../components/MoviesSpinner";
import MoviesLoadMoreButton from "../components/MoviesLoadMoreButton";
import { useHomeFetch } from "../customHooks/useHomeFetch";
import { useHeroFetch } from "../customHooks/useHeroFetch";
import { Container, NoResult } from "../styles/GlobalStyle";
import MoviesGoToTop from "../components/MoviesGoToTop";
import no_image from "../assets/images/no_image.jpg";
import {
  posterW500,
  imageBaseURL,
  searchBaseURL,
  popularMoviesURL,
} from "../utils/config";

const HomeMovies = () => {
  const [{ popMovies, popLoading, popError }, fetchPopMovies] = useHomeFetch();
  const [{ playingMovies, playingLoading, playingError }, fetchPlayingMovies] =
    useHeroFetch();
  const [searchTerm, setSearchTerm] = useState("");

  const searchTermResults = (search) => {
    const endpoint = search ? searchBaseURL + search : popularMoviesURL;
    setSearchTerm(search);
    fetchPopMovies(endpoint);
  };

  //  função para carregar mais filmes se houver pais páginas
  const handleLoadMoreMovies = () => {
    const searchMovies = `${searchBaseURL}${searchTerm}&page=${
      popMovies.currentPage + 1
    }`;
    const popularMovies = `${popularMoviesURL}&page=${
      popMovies.currentPage + 1
    }`;

    const endPoint = searchTerm ? searchMovies : popularMovies;
    fetchPopMovies(endPoint);
  };

  return (
    <>
      {!searchTerm && (
        <MoviesHero
          playingMovies={playingMovies}
          playingLoading={playingLoading}
          playingError={playingError}
        />
      )}
      <MoviesSearchBar callback={searchTermResults} />
      <Container>
        {popMovies.popMovies?.length > 0 ? (
          <>
            <MoviesGrid
              header={searchTerm ? "Resultado da pesquisa" : "Filmes populares"}
            >
              {popMovies.popMovies?.map((item, i) => (
                <MoviesThumbnail
                  key={i}
                  clickable
                  movieImage={
                    item.poster_path
                      ? `${imageBaseURL}${posterW500}${item?.poster_path}`
                      : no_image
                  }
                  movieId={item.id}
                  movieName={item?.original_title}
                  movieRating={item?.vote_average}
                  movieDate={item?.release_date}
                />
              ))}
            </MoviesGrid>

            {popLoading && <MoviesSpinner />}
            {popMovies?.currentPage < popMovies?.totalPages && !popLoading && (
              <MoviesLoadMoreButton
                text={"Carregar mais"}
                callback={handleLoadMoreMovies}
              />
            )}
          </>
        ) : (
          <NoResult>
            <h2>Nenhum resultado encontrado</h2>
          </NoResult>
        )}
      </Container>
      <MoviesGoToTop />
    </>
  );
};

export default HomeMovies;
