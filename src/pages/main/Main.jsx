import React from "react";
import { Link } from "react-router-dom";
import * as S from "./style";

function Main() {
  return (
    <S.MainWrapper>
      <S.MainTitle>❤️ FrontEnd 파이팅 ❤️</S.MainTitle>
      {/* 추후 삭제예정 */}
      <S.MainSection>
        <Link to="/fortune">
          <S.MainSectionButton>포츈쿠키(승민)</S.MainSectionButton>
        </Link>
        <Link to="/irumiWrite">
          <S.MainSectionButton>연등쓰기(찬주)</S.MainSectionButton>
        </Link>
        <Link to="/irumiView">
          <S.MainSectionButton>연등보기(민경)</S.MainSectionButton>
        </Link>
      </S.MainSection>
    </S.MainWrapper>
  );
}

export default Main;
