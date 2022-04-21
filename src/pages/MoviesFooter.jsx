import React from "react";
import { MoviesFooterWrapper } from "../styles/GlobalStyled";

const MoviesFooter = () => {
  const footerDate = new Date().getFullYear();

  return (
    <MoviesFooterWrapper>
      <>
        <div>
          <h6>
            Made with <span className="material-icons">favorite</span> by
            Giovane Pereira
          </h6>

          <div className="social__links">
            <a
              href="https://github.com/gpereira305"
              target="_blank"
              rel="noopener noreferrer"
              title="Ir para Github"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/giovane-pereira"
              target="_blank"
              rel="noopener noreferrer"
              title="Ir para Linkedin"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>

        <span>
          <small>&copy; All Rights Reserved | StayTuned {footerDate} </small>
        </span>
      </>
    </MoviesFooterWrapper>
  );
};

export default MoviesFooter;
