import React from "react";
import { styled } from "styled-components";

export const BackBtnBox = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BackBtn = () => {
  return (
    <BackBtnBox>
      <img src="/backBtn.png" style={{ width: "20px" }} />
    </BackBtnBox>
  );
};

export default BackBtn;
