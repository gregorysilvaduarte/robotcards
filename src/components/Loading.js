import React from "react";
import {
  LoadingWrapper,
  LoadingInner,
  LoadingBar,
  LoadingMainBar,
  Title,
} from "./../assets/css/Loading";

const Loading = () => {
  return (
    <LoadingWrapper>
      <LoadingInner>
        <Title>LOADING...</Title>
        <LoadingBar>
          <LoadingMainBar></LoadingMainBar>
        </LoadingBar>
      </LoadingInner>
    </LoadingWrapper>
  );
};

export default Loading;
