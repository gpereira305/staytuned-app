import React from "react";
import { convertMoney, formatDate } from "../utils/helpers";
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
    <>
      <h2>{title.length > 50 ? `${title.slice(0, 50)}...` : title} </h2>

      {tagline && (
        <small>
          "{tagline.length > 100 ? `${tagline.slice(0, 100)}...` : tagline}"
        </small>
      )}
      <br />
      <br />
      <div>
        <h3>
          Lançamento:{" "}
          <span style={{ fontSize: "16px" }}>
            {formatDate(release_date) || "???"}
          </span>
        </h3>
        <h3>
          Orçamento:{" "}
          <span style={{ fontSize: "14px" }}>
            {budget === 0 || null ? "???" : `U${convertMoney(budget)}`}
          </span>
        </h3>

        <h3>
          Faturamento:{" "}
          <span style={{ fontSize: "14px" }}>
            {revenue === 0 || null ? "???" : `U${convertMoney(revenue)}`}
          </span>
        </h3>

        <h3>
          Duração:{" "}
          <span style={{ fontSize: "14px" }}>{`${runtime} min` || "???"}</span>
        </h3>

        <h3>
          Gêneros:{" "}
          <span style={{ fontSize: "14px" }}>
            {getEachItem(genres)?.join(", ") || "???"}
          </span>
        </h3>

        <h3>
          {spoken_languages.length > 1 ? "Idiomas:" : "Idioma:"}{" "}
          <span style={{ fontSize: "14px" }}>
            {getEachLang(spoken_languages)?.join(", ") || "???"}
          </span>
        </h3>

        <h3>
          Nota IMDb:{" "}
          <span style={{ fontSize: "14px" }}>{vote_average || "???"}</span>
        </h3>

        <h3>
          {production_countries.length > 1 ? "Países:" : "País:"}{" "}
          <span style={{ fontSize: "14px" }}>
            {getEachItem(production_countries)?.join(", ") || "???"}
          </span>
        </h3>
        <h3>
          {production_companies.length > 1 ? " Produtoras:" : " Produtora:"}{" "}
          <span style={{ fontSize: "14px" }}>
            {getEachItem(production_companies)?.join(", ") || "???"}
          </span>
        </h3>

        {homepage && (
          <h3>
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
              {homepage}
            </a>
          </h3>
        )}
        <br />
        <br />

        <div>
          <h3>Enredo:</h3>
          <p>
            {overview.length > 700
              ? `${overview.slice(0, 700)}...`
              : overview || "???"}
          </p>
        </div>
      </div>
    </>
  );
};

export default MoviesInfoDetail;
