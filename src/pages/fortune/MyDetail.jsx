import React from "react";
import * as S from "./style";
import { Link } from "react-router-dom";

function MyDetail() {
  return (
    <S.StarWrapper>
      <S.SparkleWrapper>
        <S.FortuneTitle>이것은 너의 디테일 연등이 될 것이다</S.FortuneTitle>
      </S.SparkleWrapper>
    </S.StarWrapper>
  );
}

export default MyDetail;
