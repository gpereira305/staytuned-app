import React from "react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import no_image from "../assets/images/no_image.jpg";

import { banner, poster, imageBaseURL } from "../utils/config";
import MoviesSpinner from "./MoviesSpinner";
import { Link } from "@reach/router";

const MoviesHero = ({ playingMovies, playingLoading, playingError }) => {
  return (
    <div className="fade-in">
      {playingError && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>Algo de errado aconteceu!</h2>
        </div>
      )}
      {!playingMovies ? (
        <MoviesSpinner />
      ) : (
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          autoplay={{ delay: 5000 }}
          loop={true}
          speed={2500}
          grabCursor={true}
          spaceBetween={0}
          slidesPerView={1}
          effect={"fade"}
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
    <div
      className="hero-slide"
      style={{
        backgroundImage: `url(${imageBaseURL}${banner}${item.backdrop_path})`,
      }}
    >
      <div className="hero-slide__item">
        <div className="hero-slide__item--content">
          <div className="hero__text">
            <h2 className="title">{item.title}</h2>
            <p className="overview">{item.overview}</p>
          </div>
          <Link to={`/${item.id}`} className="hero-slide__link">
            <img
              className="hero-slide__item-img"
              src={`${imageBaseURL}${banner}${item.poster_path}` || no_image}
              alt={item.title}
              title={item.title}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MoviesHero;
