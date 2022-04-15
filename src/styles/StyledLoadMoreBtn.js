import styled from "styled-components";

export const StyledLoadMoreBtn = styled.button`
  background: var(--red);
  width: 20%;
  color: #fff;
  cursor: pointer;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  outline: none;
  border: 1px solid var(--red);

  :hover {
    opacity: 0.8;
  }
`;
