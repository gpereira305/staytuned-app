import React from "react";
import { convertMoney, formatDate } from "../utils/helpers";
import {
  MovieInfoDetailsText,
  MovieInfoDetailsTextWrapper,
  MovieInfoDetailsH4,
  MovieInfoDetailsOverview,
} from "../styles/MoviesDetailStyled.js";

// import no_image from "../assets/images/no_image.jpg";

const MoviesInfoDetail = ({ detailedMovieData }) => {
  const {
    overview,
    genres,
    spoken_languages,
    title,
    budget,
    production_companies,
    production_countries,
    release_date,
    revenue,
    runtime,
    tagline,
    vote_average,
    homepage,
    original_title,
  } = detailedMovieData;

  // retira cada genero do array
  const getEachItem = (item) => {
    return item.map((g) => g.name);
  };

  // retira cada idioma do array
  const getEachLang = (lang) => {
    return lang.map((l) => l.english_name);
  };

  return (
    <MovieInfoDetailsText>
      <div>
        <h2>
          {original_title.length > 50
            ? `${original_title.slice(0, 50)}...`
            : original_title}
        </h2>
        {title && <small>({title})</small>}
        <br />
        {tagline && (
          <span>
            "{tagline.length > 100 ? `${tagline.slice(0, 100)}...` : tagline}"
          </span>
        )}
      </div>

      <MovieInfoDetailsTextWrapper>
        <MovieInfoDetailsH4>
          Lançamento: <span>{formatDate(release_date) || "???"}</span>
        </MovieInfoDetailsH4>
        <MovieInfoDetailsH4>
          Orçamento:{" "}
          <span>
            {budget === 0 || null ? "???" : `U${convertMoney(budget)}`}
          </span>
        </MovieInfoDetailsH4>
        <MovieInfoDetailsH4>
          Faturamento:{" "}
          <span>
            {revenue === 0 || null ? "???" : `U${convertMoney(revenue)}`}
          </span>
        </MovieInfoDetailsH4>
        <MovieInfoDetailsH4>
          Duração: <span>{`${runtime} min` || "???"}</span>
        </MovieInfoDetailsH4>
        <MovieInfoDetailsH4>
          Gêneros: <span>{getEachItem(genres)?.join(", ") || "???"}</span>
        </MovieInfoDetailsH4>
        <MovieInfoDetailsH4>
          {spoken_languages.length > 1 ? "Idiomas:" : "Idioma:"}{" "}
          <span>{getEachLang(spoken_languages)?.join(", ") || "???"}</span>
        </MovieInfoDetailsH4>
        <MovieInfoDetailsH4>
          {console.log(vote_average)}
          Nota IMDb:{" "}
          <span style={{ color: vote_average < 6 ? "#bd8302" : "#099f0f" }}>
            {vote_average || "???"}
          </span>
        </MovieInfoDetailsH4>
        <MovieInfoDetailsH4>
          {production_countries.length > 1
            ? "Países de origem:"
            : "País de origem:"}{" "}
          <span>{getEachItem(production_countries)?.join(", ") || "???"}</span>
        </MovieInfoDetailsH4>
        <MovieInfoDetailsH4>
          {production_companies.length > 1 ? " Produtoras:" : " Produtora:"}{" "}
          <span>{getEachItem(production_companies)?.join(", ") || "???"}</span>
        </MovieInfoDetailsH4>

        {homepage && (
          <MovieInfoDetailsH4 style={{ display: "flex", alignItems: "center" }}>
            Site oficial:{" "}
            <a
              style={{
                fontSize: "14px",
                color: "#adadad",
                fontStyle: "italic",
                textDecoration: "underline",
              }}
              title="Visitar site"
              href={homepage}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-icons">open_in_new</span>
            </a>
          </MovieInfoDetailsH4>
        )}

        <MovieInfoDetailsOverview>
          <h4>Enredo:</h4>
          <p>
            {overview.length > 700
              ? `${overview.slice(0, 700)}...`
              : overview || "???"}
          </p>
        </MovieInfoDetailsOverview>
      </MovieInfoDetailsTextWrapper>
    </MovieInfoDetailsText>
  );
};

export default MoviesInfoDetail;
