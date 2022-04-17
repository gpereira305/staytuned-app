import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 * {
   list-style: none;
   text-decoration: none;
   letter-spacing: 1.2px;
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   line-height: 1.2;
   margin: 0;
   padding: 0; 
 }

 

:root {
   --white:#fff; 
   --light: #cdcdcd;
   --red: #b90000;
   --gray: #8d8d8d;
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

export const MainButton = styled.div`
  display: flex;
  justify-content: center;
  margin: 3% 0;

  > button {
    background-color: var(--red);
    color: var(--white);
    border: 1px solid var(--red);
    padding: 8px 35px;
    cursor: pointer;
    outline: none;
  }
`;
