import styled from "styled-components";

export const MovieHeroSlide = styled.figure`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const MovieHeroSlideItem = styled.div`
  width: 100%;
  position: relative;
  min-height: 824px;

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
  width:100%;
  max-width: 1200px;
  right: 0;
  left: 0;
  top: 15%;
  margin: auto;

  @media (max-width: 1200px) {
    max-width: none;
    width: auto;
    padding: 0 20px;
  }
  @media (max-width: 1090px) {
    bottom: 10%;
    align-items: center;
  }

  section {
    padding-right: 5%;
    padding-bottom: 10%;
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
      line-height: 25px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 10;
    }
  }

  a {
    flex: 1;
    text-align-last: end;

    img {
      max-width: 80%;
      min-width: 400px;

      @media (max-width: 990px) {
        min-width: 300px;
      }

    }
    @media (max-width: 790px) {
      display: none;
    }
  }
`;

export const MoviesGridItem = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
  margin-top: 30px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 476px) {
    grid-template-columns: 1fr;
  }
`;

export const MoviesGridImage = styled.figure`
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    max-width: 225px;
    min-height: 325px;

   @media (max-width: 576px)  {
    min-height: 225px;
     max-width: none;
   }

  @media (max-width: 470px) {
    max-width: none;
  }

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
    display: block;
    overflow: hidden;
    width: 100%;
    max-width: inherit;
    min-height: inherit;

    img {
      display: block;
      object-fit: cover;
      width: inherit;
      height: inherit;
      max-width: inherit;
      min-height: inherit;


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
  opacity: 0;
  background-color: rgba(3, 3, 3, 0.7);
  transition: all ease-in-out 0.4s;
  -webkit-transition: all ease-in-out 0.4s;
  -moz-transition: all ease-in-out 0.4s;
  -ms-transition: all ease-in-out 0.4s;
  -o-transition: all ease-in-out 0.4s;

  @media (max-width: 490px) {
    display: none;
  }

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
