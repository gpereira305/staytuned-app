import React from "react";
import { Autoplay, Pagination, Navigation, EffectFade, Parallax } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { apiConfig } from "../utils/config";

const HeroMovies = ({ movies }) => {
  return (
    <div>
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        autoplay={{ delay: 3500 }}
        loop={true}
        speed={1000}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        effect={"fade"}
      >
        {movies.movies?.map((item, i) => (
          <SwiperSlide key={i}>
            <HeroSlideItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const HeroSlideItem = (props) => {
  const item = props.item;

  const background = apiConfig.originalImg(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );

  return (
    <div
      className="hero-slide"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero-slide__item">
        <div className="hero-slide__item--content">
          <div className="hero__text">
            <h2 className="title">{item.title}</h2>
            <p className="overview">{item.overview}</p>
          </div>
          <img
            className="hero-slide__item-img"
            src={apiConfig.w500Img(item.poster_path)}
            alt={item.title}
            title={item.title}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroMovies;
