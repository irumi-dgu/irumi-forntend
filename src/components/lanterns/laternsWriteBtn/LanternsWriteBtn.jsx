import React from "react";
import * as S from "./style";

function LanternsWriteBtn() {
  return (
    <S.Search onSubmit={onSubmit}>
      <S.Input
        placeholder="닉네임을 입력해주세요"
        value={searchWord}
        onChange={changeSearchWord}
      />
      <img src="/icon_search.svg" style={{ width: "16px" }} />
    </S.Search>
  );
}

export default LanternsWriteBtn;
