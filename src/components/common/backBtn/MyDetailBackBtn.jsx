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
  z-index: 1000;
`;

const MyDetailBackBtn = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate("/lanterns");
  };
  // if (location.state && location.state.from) {
  //   console.log(location.state);
  //   console.log(location.state.from);
  //   navigate(location.state.from);
  // } else {
  //   navigate("/");
  // }

  return (
    <BackBtnBox onClick={handleBackClick}>
      <img src="/backBtn.png" style={{ width: "20px" }} />
    </BackBtnBox>
  );
};

export default MyDetailBackBtn;
