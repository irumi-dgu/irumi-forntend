import React from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

function AboutUs() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <S.aboutWrapper>
      <S.aboutBg img src="/about_bgimg.png" />
      <S.Close>
        <S.CloseBtn onClick={handleBackClick}>닫기</S.CloseBtn>
      </S.Close>
    </S.aboutWrapper>
  );
}

export default AboutUs;
