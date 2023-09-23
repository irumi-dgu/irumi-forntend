import React from "react";
import * as S from "./style";
import DetailLantern from "../../components/irumiView/DetailLantern";
import { Link } from "react-router-dom";
import BackBtn from "../../components/common/backBtn/BackBtn";

function IrumiView() {
  return (
    <S.IrumiViewWrapper>
      <S.BackBtnBox>
        <Link to="/lanterns">
          <BackBtn />
        </Link>
      </S.BackBtnBox>
      <DetailLantern />
    </S.IrumiViewWrapper>
  );
}

export default IrumiView;
