import styled from "styled-components";

export const FormSearchMovies = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 15vh;
  margin: auto;
  width: 100%;
  background-color: #000;

  div {
    position: relative;
    display: flex;
    width: 40%;
    min-width: 330px;
  }

  input {
    border: none;
    outline: none;
    border: 2px solid var(--light);
    padding: 10px;
    font-size: 1rem;
    width: 100%;
    background-color: transparent;
    color: var(--light);

    &:focus {
      border: 2px solid var(--red);
    }

    &::placeholder {
      color: var(--light);
      font-style: italic;
    }
  }
  .material-icons {
    position: absolute;
    color: var(--gray);
    right: 13px;
    top: 10px;
  }

  @media (max-width: 970px) {
    top: 15%;
  }

  @media (max-width: 670px) {
    bottom: 55%;
    max-height: 10vh;
  }

  @media (max-width: 470px) {
    top: 0;
  }
`;
