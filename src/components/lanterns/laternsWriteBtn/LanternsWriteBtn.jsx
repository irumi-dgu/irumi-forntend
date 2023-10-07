import React from "react";
import * as S from "./style";
import { Link } from "react-router-dom";

function trackClick() {
  gtag("event", "Lanterns_write", {
    event_category: "Lanterns_write"
  });
}

function LanternsWriteBtn() {
  return (
    <>
      <S.WriteBtnLink to="/irumiWrite">
        <S.WriteBtn onClick={trackClick}>
          <img src="/icon_pen.svg" style={{ width: "40px" }} />
        </S.WriteBtn>
      </S.WriteBtnLink>
    </>
  );
}

export default LanternsWriteBtn;
