import styled from "styled-components";

export const MoviesHeaderWrapper = styled.div`
  width: 100%;
  background-color: var(--dark);
`;

export const MoviesHeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(100% - 100px);
  margin: auto;
  align-items: center;
  min-height: 7vh;

  @media (max-width: 720px) {
    width: calc(100% - 50px);
  }

  div a {
    display: flex;
    align-items: center;
    color: var(--red);
    text-transform: uppercase;
    font-size: 0.8rem;

    .material-icons {
      margin-right: 5px;
    }

    @media (max-width: 420px) {
      font-size: 0.6rem;
    }
  }

  .about {
    display: flex;
    min-width: 285px;
    justify-content: space-between;

    @media (max-width: 420px) {
      min-width: 150px;
    }

    h4 {
      color: var(--red);
    }
  }
`;
