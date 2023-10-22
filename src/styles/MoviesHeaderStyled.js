import styled from "styled-components";

export const MoviesHeaderWrapper = styled.header`
  position: fixed;
  left: 0;
  right: 0;
  width: 100%;
  top: 0;
  z-index: 100;
  width: 100%;
  transition: background-color linear 300ms;
`;

export const MoviesHeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: auto;
  align-items: center;
  padding: 20px;

  @media (max-width: 1200px) {
    max-width: none;
  }


  a {
    display: flex;
    align-items: center;
    color: var(--red);
    text-transform: uppercase;
    font-size: 0.8rem;

    .material-icons {
      margin-right: 5px;
    }

    @media (max-width: 570px) {
      font-size: 0.6rem;
    }
  }

  .about {
    display: flex;
    width: 200px;
    justify-content: space-between;

     @media (max-width: 570px) {
         width: 150px;
    }

    h4 {
      color: var(--red);
    }
  }
`;
