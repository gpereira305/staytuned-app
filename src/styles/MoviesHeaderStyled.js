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
    width: calc(100% - 30px);
  }

  div a {
    display: flex;
    align-items: center;
    color: var(--red);

    .material-icons {
      margin-right: 5px;
    }

    @media (max-width: 420px) {
      font-size: 0.8rem;
    }
  }

  .about {
    h4 {
      color: var(--red);
    }
  }
`;

export const StyledRMDBLogo = styled.img`
  width: 250px;
  margin-top: 20px;

  @media screen and (max-width: 500px) {
    width: 150px;
    margin-top: 5px;
  }
`;

export const StyledTMDBLogo = styled.img`
  width: 122px;
  margin-top: 25px;
  float: right;

  @media screen and (max-width: 500px) {
    display: inline-block;
    width: 80px;
    margin-top: 0px;
  }
`;
