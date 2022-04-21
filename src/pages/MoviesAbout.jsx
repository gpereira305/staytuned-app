import React, { useEffect } from "react";
import { Container } from "../styles/GlobalStyled";
import styled from "styled-components";
import { Helmet } from "react-helmet";

// função para a página renderizar no topo
const jumpToTop = () => {
  window.scrollTo({
    top: 0,
  });
};

const MovieAboutWrapper = styled.div`
  min-height: 90vh;
  margin-top: 10%;

  > p {
    color: var(--gray);
    padding: 10%;
  }
`;

const MoviesAbout = () => {
  useEffect(() => {
    jumpToTop();
  }, []);

  return (
    <Container>
      <Helmet>
        <title>StayTuned | Sobre</title>
      </Helmet>
      <MovieAboutWrapper>
        <p>
          O propósito dessa aplicação é poder oferecer ao usuário a
          possibilidade de pesquisar pelo título de seus filmes favoritos,
          navegar até a página de detalhes aonde contém dados sobre o lançamento
          do filme, orçamento, arrecadação, duração média, nota do IMDB e resumo
          do enredo. Também é possível ver o(s) trailer(s), elenco, produtores e
          posters.
        </p>
      </MovieAboutWrapper>
    </Container>
  );
};

export default MoviesAbout;
