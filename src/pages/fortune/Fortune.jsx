import React from "react";
import * as S from "./style";
import { Link } from "react-router-dom";

function Fortune() {
  return (
    <S.StarWrapper>
      <S.SparkleWrapper>
        <S.FortuneTitle>행운의 연꽃잎을 뽑아보세요</S.FortuneTitle>
        <S.LotusWhole>
          <Link to="/fortuneLotus">
            <S.LotusTop />
          </Link>
        </S.LotusWhole>
      </S.SparkleWrapper>
    </S.StarWrapper>
  );
}

export default Fortune;
