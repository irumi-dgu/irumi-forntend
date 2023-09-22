import React from "react";
import * as S from "./style";

function WishForm() {
  return (
    <S.wishContent>
      <S.wishBgImage img src="/s_lantern_yellow.png" alt="Pink Background" />
      <h1 style={{ color: "white" }}>이미지 왜 안뜨냐?</h1>
    </S.wishContent>
  );
}

export default WishForm;
