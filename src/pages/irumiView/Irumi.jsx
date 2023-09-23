import React from "react";
import * as S from "./style";
import DetailLantern from "../../components/irumiView/detailLantern";
import { Link } from "react-router-dom";
import BackBtn from "../../components/common/backBtn/BackBtn";

function IrumiView() {
  return (
    <S.IrumiViewWrapper>
      <S.BackBtnBox to="/lanterns">
        <BackBtn />
      </S.BackBtnBox>
      <DetailLantern />
    </S.IrumiViewWrapper>
  );
}

export default IrumiView;
