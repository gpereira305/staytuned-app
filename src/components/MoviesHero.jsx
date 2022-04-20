import React from "react";
import { Autoplay, Pagination, Navigation, EffectFade, Parallax } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import no_image from "../assets/images/no_image.jpg";

import { banner, imageBaseURL } from "../utils/config";
import MoviesSpinner from "./MoviesSpinner";
import { Link } from "@reach/router";
import {
  MovieHeroSlide,
  MovieHeroSlideContent,
  MovieHeroSlideItem,
} from "../styles/MoviesHomePageStyled";

const MoviesHero = ({ playingMovies, playingLoading, playingError }) => {
  return (
    <div className="fade-in">
      {!playingMovies ? (
        <MoviesSpinner />
      ) : (
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectFade, Parallax]}
          autoplay={{ delay: 5000 }}
          loop={true}
          speed={2500}
          grabCursor={true}
          spaceBetween={0}
          slidesPerView={1}
        >
          {playingMovies.playingMovies?.map((item, i) => (
            <SwiperSlide key={i}>
              <HeroSlideItem item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

const HeroSlideItem = (props) => {
  const item = props.item;

  return (
    <MovieHeroSlide
      style={{
        backgroundImage: `url(${imageBaseURL}${banner}${item.backdrop_path})`,
      }}
    >
      <MovieHeroSlideItem>
        <MovieHeroSlideContent>
          <div className="hero__text">
            <h2>{item.title}</h2>
            <p>
              {item.overview.length > 300
                ? `${item.overview.slice(0, 300)}...`
                : item.overview || "???"}{" "}
            </p>
          </div>
          <Link to={`/${item.id}`}>
            <img
              src={`${imageBaseURL}${banner}${item.poster_path}` || no_image}
              alt={item.title}
              title={item.title}
            />
          </Link>
        </MovieHeroSlideContent>
      </MovieHeroSlideItem>
    </MovieHeroSlide>
  );
};

export default MoviesHero;
