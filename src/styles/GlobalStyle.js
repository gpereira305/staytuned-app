import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 * {
   list-style: none;
   text-decoration: none;
   letter-spacing: 1.3px;
   font-weight: normal;
   line-height: 1.2;
   margin: 0;
    padding: 0;
 }

 

:root {
   --light: #cdcdcd;
   --red: #e30000;
   --gray: #ccc;
   --dark: #000;
   --light_dark: rgb(102 102 102);
   --golden: #ffb600;  
   --transition: all ease .3s;
   --radius: 3px;
 }

  body {

    box-sizing: border-box;
  }
`;

export const Container = styled.div`
  padding: 0 3%;
  position: relative;
  margin-bottom: 2%;

  /* @media (max-width: 720px) {
    width: calc(100% - 50px);
  } */
`;

export const NoResult = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;

  > h2 {
    color: var(--red);
    font-weight: bold;
  }
`;

export const TrailerGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 2% 0;
  /* justify-content: center; */
`;
