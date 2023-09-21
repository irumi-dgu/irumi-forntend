import React from "react";
import * as S from "./style";

function Intro() {
  return (
    <S.IntroWrapper>
      <S.SubTitle>연등에 소원을 달아보세요!</S.SubTitle>
      <S.intro1 src={"intro_1.svg"} />
      <S.intro2 src={"intro_2.svg"} />
      <S.intro_line src={"intro_line.svg"} />
    </S.IntroWrapper>
  );
}

export default Intro;
