import React from "react";
import * as S from "./style";
import { BrowserRouter } from "react-router-dom";

function FortuneLotus() {
  return (
    <S.StarWrapper>
      <S.SparkleWrapper>
        <S.LotusLeaf>
          <p>악으로 깡으로 버텨보세요</p>
        </S.LotusLeaf>
        <S.ClosedButton />
      </S.SparkleWrapper>
    </S.StarWrapper>
  );
}

export default FortuneLotus;
