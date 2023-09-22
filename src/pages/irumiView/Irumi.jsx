import React from "react";
import * as S from "./style";
import DetailLantern from "../../components/irumiView/DetailLantern";

function IrumiView() {
  return (
    <S.IrumiViewWrapper>
      <S.BackBtnBox>
        <img src="/backBtn.png" style={{width: "21px", height:"16px"}} />
      </S.BackBtnBox>
      <DetailLantern />
    </S.IrumiViewWrapper>
  );
}

export default IrumiView;
