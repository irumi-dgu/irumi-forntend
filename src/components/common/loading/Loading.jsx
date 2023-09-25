import React from "react";
import { styled } from "styled-components";

export const LoadingBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const Loading = () => {
  return (
    <LoadingBox>
      <img src="/icon_loading.gif" style={{ width: "50px" }} />
    </LoadingBox>
  );
};

export default Loading;
