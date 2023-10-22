import { Link } from "@reach/router";
import React , { useEffect } from "react";
import {
  MoviesHeaderContent,
  MoviesHeaderWrapper,
} from "../styles/MoviesHeaderStyled";


const MoviesHeader = () => {

useEffect(() => {
  window.addEventListener('scroll', isSticky);
}, []);

const isSticky = (e) => {
  const header = document.querySelector('header');
  const scrollTop = window.scrollY;
  scrollTop >= 10
  ? header.style.backgroundColor = 'var(--dark)'
  : header.style.backgroundColor  = '';
};

  return (
    <MoviesHeaderWrapper>
      <MoviesHeaderContent>
        <div>
          <Link to="/" title="Logo | Home">
            <span className="material-icons">ondemand_video</span>
            <h2>StayTuned</h2>
          </Link>
        </div>

        <nav className="about">
          <div>
            <a
              href="https://www.themoviedb.org/"
              target="_blank"
              rel="noopener noreferrer"
              title="Visitar site TMDb"
            >
              Site TMDb
            </a>
          </div>
          <Link to="/about" title="Sobre o app">
            <h4>Sobre o app</h4>
          </Link>
        </nav>
      </MoviesHeaderContent>
    </MoviesHeaderWrapper>
  );
};

export default MoviesHeader;
