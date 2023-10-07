import React from "react";
import { createGlobalStyle } from "styled-components";
import * as S from "./style";

const GlobalStyle = createGlobalStyle`
  :root {
    --vh: 100%;
    background-color: #041A31;
  }
`;

const NotFound = () => {
  return (
    <>
      <GlobalStyle />
      <S.Wrapper>
        <S.MainWrapper>
          <S.FixTitle>뚱땅뚱땅 고치는 중</S.FixTitle>
          <S.FixImg />
          <S.FixText>
            오류를 수정하는 중입니다. <br /> 조금만 기다려 주세요!
          </S.FixText>
        </S.MainWrapper>
      </S.Wrapper>
      ;
    </>
  );
};

export default NotFound;
