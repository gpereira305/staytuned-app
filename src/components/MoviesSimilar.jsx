import React from "react";
import styled from "styled-components";
import { Autoplay, Pagination, Navigation, EffectFade, Parallax } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import no_image from "../assets/images/no_image.jpg";

import { imageBaseURL, posterW500 } from "../utils/config";
import MoviesSpinner from "./MoviesSpinner";
import { Link } from "@reach/router";
import { Container } from "../styles/GlobalStyled";
import { MovieHeaderTitle } from "../styles/MoviesDetailStyled";

// função para iniciar no topo da página
const jumpToTop = () => {
  window.scrollTo({
    top: 0,
  });
};

const SimilarMovieWrapper = styled.div`
  margin-bottom: 10%;

  .swiper-button-next,
  .swiper-button-prev {
    color: var(--red);
  }

  @media (max-width: 990px) {
    .swiper-slide {
      width: 230px !important;
    }
  }

  @media (max-width: 490px) {
    .swiper-slide {
      width: 320px !important;
    }
  }
`;

const SimilarMoviesImg = styled.img`
  width: 100%;
  position: relative;
`;

const MoviesSimilar = ({ detailedMovieData }) => {
  const { results } = detailedMovieData.movieSimilarResult;

  return (
    <Container className="fade-in">
      <MovieHeaderTitle>Filmes Similares</MovieHeaderTitle>
      {!results ? (
        <MoviesSpinner />
      ) : (
        <SimilarMovieWrapper>
          <Swiper
            modules={[Autoplay, Pagination, Navigation, EffectFade, Parallax]}
            autoplay={{ delay: 4000 }}
            loop={true}
            speed={700}
            grabCursor={true}
            spaceBetween={20}
            slidesPerView={5}
            navigation={true}
          >
            {results?.map((item, i) => (
              <SwiperSlide key={i}>
                <Link to={`/${item.id}`} onClick={jumpToTop}>
                  <SimilarMoviesImg
                    src={
                      `${imageBaseURL}${posterW500}${item.poster_path}` ||
                      no_image
                    }
                    alt={item.title}
                    title={item.title}
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </SimilarMovieWrapper>
      )}
    </Container>
  );
};

export default MoviesSimilar;
