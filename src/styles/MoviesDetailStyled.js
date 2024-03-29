import styled from "styled-components";




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
  width: 100%;
  max-width: 1200px;
  margin: auto;
  top: 15%;
  right: 0;
  left: 0;
  background: rgb(0 0 0 / 65%);

  @media (max-width: 1200px) {
    max-width: none;
     margin: auto 20px;
    width: auto;
  }
  @media (max-width: 990px) {
    flex-direction: column;
  }
`;

export const MovieInfoPoster = styled.figure`
  flex: 1;
  padding: 5px;
  padding-bottom: 0;

  .poster {
    width: inherit;
    max-height: 550px;
    object-fit: contain;
    max-width: 450px;

    @media (max-width: 990px) {
      display: none;
    }
  }
`;

export const MovieInfoDetailsText = styled.article`
  flex: 3;
  padding: 15px;
  color: var(--light);

  @media (max-width: 576px) {
      max-height: 500px;
      overflow-y: auto;
  }

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
      display: block;
      color: var(--red);
      font-size: 0.75rem;
      font-style: italic;
    }
    span {
      font-size: 0.85rem;
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
  }

  a {
    span {
      color: #6767c7;
      margin-left: 10px;
      font-size: 1.1rem;
    }
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
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
  }
`;

// TRAILER COMPONENT
export const MovieTrailerGrid = styled.figure`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  @media (max-width: 420px) {
    justify-content: center;
  }
`;

// CAST COMPONENT
export const MovieHeaderTitle = styled.h3`
  margin: 5% 0 10px;
  text-transform: uppercase;
  color: var(--red);
  font-weight: 500;
  font-size: 1.6rem;
`;

export const CastGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 10px;

  > .cast__wrapper {
    background-color: var(--dark);
    color: var(--light);
    border-radius: var(--radius);

    > img {
      width: 100%;
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
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

  @media (max-width: 1274px) {
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 10px;
  }

  @media (max-width: 990px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 824px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 674px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 474px) {
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
    border-radius: var(--radius);
  }

  @media (max-width: 920px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 670px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
