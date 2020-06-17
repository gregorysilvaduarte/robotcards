import styled from "styled-components";

export const LoadingWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  min-height: 100vh;
  background: #0f9e5e;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  color: #fff;
  font-family: sans-serif;
`;

export const LoadingInner = styled.div`
  width: 200px;
  text-align: center;
`;

export const LoadingBar = styled.div`
  max-width: 200px;
  height: 20px;
  padding: 4px;
  border: 2px solid #fff;
  border-radius: 20px;
  transform: translateX(8%);
  overflow: hidden;
`;

export const LoadingMainBar = styled.div`
  width: 100%;
  max-width: 0;
  height: 20px;
  background: #fff;
  border-radius: 10px;
  animation: animate 5s infinite;

  @keyframes animate {
    0% {
      max-width: 0%;
    }

    20% {
      max-width: 20%;
    }

    90% {
      max-width: 50%;
    }

    93% {
      max-width: 80%;
    }

    100% {
      max-width: 100%;
    }
  }
`;
