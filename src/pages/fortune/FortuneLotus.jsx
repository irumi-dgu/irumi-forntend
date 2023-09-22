import React from "react";
import * as S from "./style";
import { Link } from "react-router-dom";

function FortuneLotus() {
  return (
    <S.StarWrapper>
      <S.SparkleWrapper>
        <S.LotusLeaf>
          <S.FortuneContents>
            <p>
              악으로 깡으로 버텨보세요 이렇게 길게 쓰면 어떻게 되는 거지 아
              그리고 줄바꿈은 어떻게 해결하지
            </p>
          </S.FortuneContents>
        </S.LotusLeaf>
        <Link to="/MyDetail">
          <S.ClosedButton />
        </Link>
      </S.SparkleWrapper>
    </S.StarWrapper>
  );
}

export default FortuneLotus;
