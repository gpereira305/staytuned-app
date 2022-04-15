import styled from "styled-components";

export const StyledMovieThumb = styled.div`
  img {
    width: 100%;
    height: auto;
    transition: all 0.3s;
    object-fit: cover;

    .clickable {
      cursor: pointer;
    }
  }
`;
