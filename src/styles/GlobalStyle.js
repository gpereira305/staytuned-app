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
  padding: 0 5%;
  position: relative;
  margin-bottom: 5%;
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
