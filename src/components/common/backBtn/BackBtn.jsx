import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

export const BackBtnBox = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const BackBtn = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  };
  return (
    <BackBtnBox onClick={handleBackClick}>
      <img src="/backBtn.png" style={{ width: "20px" }} />
    </BackBtnBox>
  );
};

export default BackBtn;