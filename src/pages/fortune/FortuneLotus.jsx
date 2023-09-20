import React from "react";
import * as S from "./style";
import { BrowserRouter } from "react-router-dom";

function FortuneLotus() {
  return (
    <S.StarWrapper>
      <S.SparkleWrapper>
        <S.LotusLeaf />
      </S.SparkleWrapper>
    </S.StarWrapper>
  );
}

export default FortuneLotus;
