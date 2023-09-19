import React from "react";
import * as S from "./style";
import Back from "../../../public/back.png";
import LanternChoice from "../../components/irumiWrite/lanternColorChoice";

function IrumiWrite() {
  return (
    <S.IrumiWriteWrapper>
      <S.backStyledImage src={Back} alt="이전" />
      <LanternChoice />
    </S.IrumiWriteWrapper>
  );
}

export default IrumiWrite;
