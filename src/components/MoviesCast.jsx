import React, { useState } from "react";
import no_image from "../assets/images/no_image.jpg";
import { imageBaseURL, posterW500 } from "../utils/config";

import { Container, MainButton } from "../styles/GlobalStyled";
import { CastGrid, MovieHeaderTitle } from "../styles/MoviesDetailStyled";

const MoviesCast = ({ detailedMovieData }) => {
  const [visibleCast, setVisibleCast] = useState(12);
  const { cast, crew } = detailedMovieData;

  const handleLoad = () => {
    setVisibleCast((prevCast) => prevCast + 12);
  };

  return (
    <>
      {cast && (
        <Container>
          <MovieHeaderTitle>Elenco</MovieHeaderTitle>
          <CastGrid>
            {cast.slice(0, visibleCast).map((item, i) => (
              <div key={i} className="cast__wrapper">
                <img
                  src={
                    item.profile_path
                      ? `${imageBaseURL}${posterW500}${item.profile_path}`
                      : no_image
                  }
                  alt={item.name}
                  title={item.name}
                />
                <div>
                  <p>{item.name}</p>
                  {item.character && <small>"{item.character}"</small>}
                </div>
              </div>
            ))}
          </CastGrid>
          {cast.slice(0, visibleCast).length < cast.length ? (
            <MainButton>
              <button
                type="button"
                title="Mostar mais conteúdo"
                onClick={handleLoad}
              >
                Mostrar mais
              </button>
            </MainButton>
          ) : (
            ""
          )}

          <MovieHeaderTitle>Produção</MovieHeaderTitle>
          <CastGrid>
            {crew.slice(0, visibleCast).map((item, i) => (
              <div key={i} className="cast__wrapper">
                <img
                  src={
                    item.profile_path
                      ? `${imageBaseURL}${posterW500}${item.profile_path}`
                      : no_image
                  }
                  alt={item.name}
                  title={item.name}
                />
                <div>
                  <p>{item.name}</p>
                  {item.job && <small>({item.job})</small>}
                </div>
              </div>
            ))}
          </CastGrid>
          {crew.slice(0, visibleCast).length < crew.length ? (
            <MainButton>
              <button
                type="button"
                title="Mostar mais conteúdo"
                onClick={handleLoad}
              >
                Mostrar mais
              </button>
            </MainButton>
          ) : (
            ""
          )}
        </Container>
      )}
    </>
  );
};

export default MoviesCast;
