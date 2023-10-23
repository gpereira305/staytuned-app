import React, { useState, useEffect } from "react";
import MoviesHero from "../components/MoviesHero";
import MoviesSearchBar from "../components/MoviesSearchBar";
import MoviesGrid from "../components/MoviesGrid";
import MoviesThumbnail from "../components/MoviesThumbnail";
import MoviesSpinner from "../components/MoviesSpinner";
import MoviesLoadMoreButton from "../components/MoviesLoadMoreButton";
import { useHomeFetch } from "../customHooks/useHomeFetch";
import { useHeroFetch } from "../customHooks/useHeroFetch";
import { Container } from "../styles/GlobalStyled";
import no_image from "../assets/images/no_image.jpg";
import { Helmet } from "react-helmet";
import {
  posterW500,
  imageBaseURL,
  searchBaseURL,
  popularMoviesURL,
} from "../utils/config";
import { MoviesGridItem } from "../styles/MoviesHomePageStyled";

// função para a página renderizar no topo
const jumpToTop = () => {
  window.scrollTo({
    top: 0,
  });
};

const MoviesHomepage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [{ popMovies, popLoading }, fetchPopMovies] = useHomeFetch(searchTerm);
  const [{ playingMovies, playingLoading, playingError }] = useHeroFetch();



  // função de pesquisa por termo digitado no search field
  const searchTermResults = (search) => {
    const endpoint = search ? searchBaseURL + search : popularMoviesURL;
    setSearchTerm(search);
    fetchPopMovies(endpoint);
  };

  //  função para carregar mais filmes
  const handleLoadMoreMovies = () => {
    const allPopMovies = `${popularMoviesURL}&page=${ popMovies.currentPage + 1}`;
    const searchMovies = `${searchBaseURL}${searchTerm}&page=${ popMovies.currentPage + 1}`;

    const endPoint = searchTerm ? searchMovies : allPopMovies;
    fetchPopMovies(endPoint);
  };

  useEffect(() => {
    jumpToTop();
  }, []);

  const fixedRating = (voteVal) =>  Number.parseFloat(voteVal).toFixed(1);

  return (
    <>
      <Helmet>
        <title>StayTuned | Home</title>
      </Helmet>
      {!searchTerm && (
        <MoviesHero
          playingMovies={playingMovies}
          playingLoading={playingLoading}
          playingError={playingError}
        />
      )}
      <MoviesSearchBar callback={searchTermResults} />

      <Container>
        <>
          {popMovies.popMovies?.length > 0 ? (
            <>
              <MoviesGrid
                header={
                  searchTerm ? "Resultado da pesquisa" : "Filmes populares"
                }
              >
                <MoviesGridItem>
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
                      movieRating={fixedRating(item?.vote_average)}
                      movieDate={item?.release_date}
                    />
                  ))}
                </MoviesGridItem>
              </MoviesGrid>

              {popLoading && <MoviesSpinner />}

              {popMovies?.currentPage < popMovies?.totalPages &&
                !popLoading && (
                  <MoviesLoadMoreButton
                    text={"Carregar mais"}
                    callback={handleLoadMoreMovies}
                  />
                )}
            </>
          ) : (
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "90vh",
              }}
            >
              <MoviesSpinner />
            </div>
          )}
        </>
      </Container>
    </>
  );
};

export default MoviesHomepage;
