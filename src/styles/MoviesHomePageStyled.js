import styled from "styled-components";

export const MovieHeroSlide = styled.section`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const MovieHeroSlideItem = styled.div`
  width: 100%;
  position: relative;
  min-height: 100vh;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(0 0 0 / 65%);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 350px;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 5, 0.036852240896358524) 0%,
      rgba(0, 0, 0, 0.7511379551820728) 46%,
      rgba(0, 0, 0, 1) 80%,
      rgba(0, 0, 0, 1) 97%
    );
  }
`;

export const MovieHeroSlideContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: absolute;
  width: 85%;
  right: 0;
  left: 0;
  top: 7%;
  margin: auto;

  @media (max-width: 1090px) {
    bottom: 10%;
    align-items: center;
  }

  > div {
    padding-right: 5%;
    padding-bottom: 10px;
    flex: 2;

    @media (max-width: 1090px) {
      flex: 5;
    }

    h2 {
      color: var(--red);
      text-transform: uppercase;
      padding-bottom: 10px;
      font-weight: 400;
    }

    p {
      color: var(--light);
      font-weight: 300;
      font-size: 0.95rem;
    }
  }

  a {
    flex: 1;

    img {
      max-width: 80%;
      min-width: 400px;

      @media (max-width: 1090px) {
        display: none;
      }
    }
  }
`;

export const MoviesGridWrapper = styled.div`
  > div {
    display: flex;
    align-items: center;

    h2 {
      margin: 3% 0 15px;
    }
  }
`;

export const MoviesGridItem = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 10px;

  @media (max-width: 1524px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: 1324px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
  }

  @media (max-width: 790px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 420px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const MoviesGridImage = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  &:hover .info {
    opacity: 1;
  }

  span {
    clip-path: polygon(100% 0%, 100% 100%, 51% 68%, 0 99%, 0% 50%, 0 0);
    position: absolute;
    background-color: gold;
    right: 0;
    color: rgb(0, 0, 0);
    font-size: 0.75rem;
    text-align: center;
    width: 25px;
    height: 25px;
    padding: 3px;
    font-weight: bold;
  }

  a {
    img {
      width: 100%;
      height: 46vh;

      @media (max-width: 790px) {
        height: auto;
      }
    }
  }
`;

export const MoviesGridInfo = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 100%;
  color: var(--light);
  z-index: 10;
  top: 0;
  height: 46vh;
  opacity: 0;
  background-color: rgba(3, 3, 3, 0.7);
  transition: all ease-in-out 0.4s;
  -webkit-transition: all ease-in-out 0.4s;
  -moz-transition: all ease-in-out 0.4s;
  -ms-transition: all ease-in-out 0.4s;
  -o-transition: all ease-in-out 0.4s;

  p {
    text-transform: uppercase;
    font-size: 0.8rem;
    margin-bottom: 5px;
    font-weight: bold;
    padding: 0 10px;
  }

  small {
    font-size: 0.6rem;
    font-weight: bold;
  }
`;
