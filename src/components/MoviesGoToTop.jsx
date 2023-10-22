import React, { useState } from "react";
import styled from "styled-components";

const ScrollTop = styled.div`
  position: fixed;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  bottom: 20%;
  right: 5%;
  z-index: 100;
  cursor: pointer;
  font-size: 20px;
  color: var(--light);
  border-radius: 100%;
  background: var(--red);
`;

const MoviesGoToTop = () => {
  const [visible, setVisible] = useState(false);

  // determina a posisão em que o scroll icon irá aparecer na página
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 20) {
      setVisible(true);
    } else if (scrolled <= 20) {
      setVisible(false);
    }
  };

  //  comportamento do scroll icon setado para suave
  const scrollTopPage = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", toggleVisible);

  return (
      <ScrollTop
        className="material-icons slide-in-bottom"
        onClick={scrollTopPage}
        title="Voltar ao topo da página"
        style={{ display: visible ? "flex" : "none" }}
      >
        arrow_upward
      </ScrollTop>
  );
};

export default MoviesGoToTop;
