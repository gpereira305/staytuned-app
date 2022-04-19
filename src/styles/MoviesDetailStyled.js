import styled from "styled-components";

export const MovieInfoSection = styled.section`
  position: relative;
`;

export const MovieInfoBg = styled.div`
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  animation: animateMovieinfo 1s;

  &::before {
    position: absolute;
    content: "";
    background: rgb(0 0 0 / 50%);
    left: 0;
    top: 0;
    bottom: 0;
    width: 100%;
  }
`;

export const MovieInfoWrapper = styled.div`
  display: flex;
  position: absolute;
  width: calc(100% - 100px);
  margin: auto;
  top: 8%;
  right: 0;
  left: 0;
  background: rgb(0 0 0 / 80%);

  @media (max-width: 990px) {
    flex-direction: column;
  }

  @media (max-width: 720px) {
    width: calc(100% - 50px);
    top: 2%;
  }
`;

export const MovieInfoPoster = styled.div`
  flex: 1;

  .poster {
    width: 100%;
    min-width: 400px;
    height: -webkit-fill-available;

    @media (max-width: 990px) {
      display: none;
    }
  }
`;

export const MovieInfoDetailsText = styled.div`
  flex: 3;
  padding: 5px 15px 5px;
  color: var(--light);

  > div {
    margin-bottom: 15px;

    h2 {
      color: var(--red);
      font-weight: 500;
      text-transform: uppercase;

      @media (max-width: 720px) {
        font-size: 1.2rem;
      }
    }

    > small {
      color: var(--red);
      font-size: 0.75rem;
      font-style: italic;
    }
    span {
      font-size: 0.85rem;
      /* font-style: italic; */
    }
  }
`;

export const MovieInfoDetailsTextWrapper = styled.div``;

export const MovieInfoDetailsH4 = styled.h4`
  text-transform: uppercase;
  line-height: 1.65;

  > span {
    font-size: 0.85rem;
    color: var(--gray);
    text-transform: capitalize;
    margin-left: 10px;

    @media (max-width: 720px) {
      font-size: 0.7rem !important;
    }
  }

  a {
    span {
      color: #6767c7;
      margin-left: 10px;
      font-size: 1.1rem;
    }
  }

  @media (max-width: 720px) {
    font-size: 0.85rem;
    line-height: 1.35;
  }
`;

export const MovieInfoDetailsOverview = styled.div`
  margin-top: 3%;
  padding-right: 10%;

  h4 {
    text-transform: uppercase;
  }

  p {
    font-size: 0.85rem;
    padding-top: 10px;
    line-height: 1.4;
    font-weight: 400;
    font-style: italic;
    color: var(--gray);

    @media (max-width: 720px) {
      font-size: 0.65rem;
    }
  }
`;

// TRAILER COMPONENT
export const MovieTrailerGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  @media (max-width: 420px) {
    justify-content: center;
  }
`;

// CAST COMPONENT
export const MovieHeaderTitle = styled.h1`
  margin-top: 5%;
  text-transform: uppercase;
  color: var(--red);
  font-weight: 500;
  font-size: 1.6rem;
`;

export const CastGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 10px;

  > .cast__wrapper {
    background-color: var(--dark);
    color: var(--light);

    > img {
      width: 100%;
    }

    > div {
      padding: 5px;

      p {
        text-transform: uppercase;
        font-size: 0.7rem;
        font-weight: 500;
        color: var(--red);
      }

      small {
        font-size: 0.65rem;
        font-style: italic;
      }
    }
  }

  @media (max-width: 1390px) {
    grid-template-columns: repeat(7, 1fr);
  }

  @media (max-width: 1220px) {
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 10px;
  }

  @media (max-width: 970px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: 770px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 670px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 570px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 420px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

// CAST POSTERS
export const MoviePosterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;

  > img {
    width: 100%;
  }

  @media (max-width: 920px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 670px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
