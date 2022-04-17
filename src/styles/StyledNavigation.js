import styled from "styled-components";

export const StyledNavigation = styled.section`
  background: #000;
  width: 100%;
  color: #fff;

  > div {
    width: calc(100% - 100px);
    margin: auto;
    display: flex;
    align-items: center;
    height: 100%;
    padding: 10px 0;

    @media (max-width: 720px) {
      width: calc(100% - 50px);
    }

    > a {
      display: flex;
      align-items: center;
      color: #fff;
      flex: 4;

      h4 {
        margin-left: 3px;
      }
    }

    div {
      display: flex;
      align-items: baseline;
      flex: 5;

      h1 {
        text-transform: uppercase;
      }

      span {
        font-size: 0.7rem;
        font-style: italic;
      }
    }
  }

  /* .navigation-content {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 20px;
    width: 100%;

    p {
      font-family: 'Abel', sans-serif;
      font-size: 22px;
      float: left;
      color: #fff;
      padding-right: 10px;
      text-decoration: none;

      @media screen and (max-width: 768px) {
        font-size: 16px;
      }
    }
  } */
`;
