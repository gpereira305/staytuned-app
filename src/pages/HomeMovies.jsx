import React, { useState } from "react";
import HeroMovies from "../components/HeroMovies";
import SearchBarMovies from "../components/SearchBarMovies";
import GridMovies from "../components/GridMovies";
import ThumbMovies from "../components/ThumbMovies";
import SpinnerMovies from "../components/SpinnerMovies";
import LoadBtnMovies from "../components/LoadBtnMovies";
import { useHomeFetch } from "../customHooks/useHomeFetch";
import { useHeroFetch } from "../customHooks/useHeroFetch";
import { Container, NoResult } from "../styles/GlobalStyle";
import GoTopMovies from "../components/GoTopMovies";
import no_image from "../assets/images/no_image.jpg";
import {
  poster,
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

  // console.log(popMovies);
  return (
    <>
      {!searchTerm && (
        <HeroMovies
          playingMovies={playingMovies}
          playingLoading={playingLoading}
          playingError={playingError}
        />
      )}
      <SearchBarMovies callback={searchTermResults} />
      <Container>
        {popMovies.popMovies?.length > 0 ? (
          <>
            <GridMovies
              header={searchTerm ? "Resultado da pesquisa" : "Filmes populares"}
            >
              {popMovies.popMovies?.map((item, i) => (
                <ThumbMovies
                  key={i}
                  clickable
                  movieImage={
                    item.poster_path
                      ? `${imageBaseURL}${poster}${item?.poster_path}`
                      : no_image
                  }
                  movieId={item.id}
                  movieName={item?.original_title}
                  movieRating={item?.vote_average}
                  movieDate={item?.release_date}
                />
              ))}
            </GridMovies>

            {popLoading && <SpinnerMovies />}
            {popMovies?.currentPage < popMovies?.totalPages && !popLoading && (
              <LoadBtnMovies
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
      <GoTopMovies />
    </>
  );
};

export default HomeMovies;
