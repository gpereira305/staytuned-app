import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
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
    min-height:90vh ;
 

  .fade-in {
      -webkit-animation: fade-in 1.5s cubic-bezier(0.47, 0, 0.745, 0.715) both;
       animation: fade-in 1.5s cubic-bezier(0.47, 0, 0.745, 0.715) both;
    }

   @-webkit-keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
    opacity: 1;
     }
   }

   @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
   }
  }
`;

export const Container = styled.div`
  padding: 0 5%;
  position: relative;
  margin-bottom: 2%;
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
    border-radius: var(--radius);
  }
`;

export const MoviesFooterWrapper = styled.div`
  background-color: var(--dark);
  min-height: 8vh;
  position: relative;

  h6 {
    color: var(--white);
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 20px 0;

    > .material-icons {
      font-size: 18px;
      color: var(--red);
      padding: 0 5px;
    }
  }

  > span {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    color: var(--gray);
    position: absolute;
    bottom: 0;
  }
`;
