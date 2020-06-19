import styled from "styled-components";

export const ScrollWrapper = styled.div`
  margin: 1em 0 1em 0 !important;

  overflow-y: scroll;
  height: 80vh;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #e78632;
    background-image: -webkit-linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.3) 20%,
      transparent 20%,
      transparent 40%,
      rgba(255, 255, 255, 0.3) 40%,
      rgba(255, 255, 255, 0.3) 60%,
      transparent 60%,
      transparent 80%,
      rgba(255, 255, 255, 0.3) 80%
    );
    border-radius: 10px;
  }
`;
