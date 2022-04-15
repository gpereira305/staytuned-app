import styled from "styled-components";

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  h3 {
    color: var(--red);
    font-weight: bold;
  }
`;

export const StyledSpinner = styled.div`
  border: 3px solid #f3f3f3; /* Light grey */
  border-top: 5px solid var(--red); /* Blue */
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 0.6s linear infinite;
  margin: 20px auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
