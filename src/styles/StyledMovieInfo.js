import styled from "styled-components";

export const StyledMovieInfo = styled.section`
  position: relative;
`;

export const StyleBgInfo = styled.div`
  background-size: cover !important;
  background-position: center !important;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  animation: animateMovieinfo 1s;

  &::before {
    position: absolute;
    content: "";
    background: rgb(0 0 0 / 80%);
    left: 0;
    top: 0;
    bottom: 0;
    width: 100%;
  }
`;

export const StyledMovieInfoWrapper = styled.div`
  display: flex;
  position: absolute;
  width: calc(100% - 100px);
  margin: auto;
  top: 10%;
  right: 0;
  left: 0;
  background: rgb(0 0 0 / 60%);

  @media (max-width: 990px) {
    flex-direction: column;
    top: 10px;
  }

  @media (max-width: 720px) {
    width: calc(100% - 50px);
  }
`;

export const StyledMoviePoster = styled.div`
  flex: 1;

  .banner {
    display: none;
    max-width: 60%;

    @media (max-width: 990px) {
      display: block;
    }

    @media (max-width: 520px) {
      display: none;
    }
  }

  .poster {
    width: 100%;
    min-width: 300px;
    height: -webkit-fill-available;

    @media (max-width: 990px) {
      display: none;
    }
  }
`;

export const StyledMovieDetails = styled.div`
  flex: 3;
  padding: 5px 15px 5px;
  color: var(--light);

  h1 {
    color: var(--red);
    font-weight: bold;
    text-transform: uppercase;

    small {
      font-size: 0.75rem;
      font-style: italic;
    }
  }
`;
