import React, { useState } from "react";
import * as S from "./style";

function LanternsSearchForm() {
  return (
    <S.LanternsWrapper>
      <S.Header>
        <Link to="/">
          <BackBtn />
        </Link>

        <S.Search>
          <S.Input placeholder="닉네임을 입력해주세요" />
          <img src="/icon_search.svg" style={{ width: "16px" }} />
        </S.Search>
      </S.Header>

      <S.Selector onClick={selectorClick}>
        <S.SelectorMenu $isActive={sortBy == "recent"}>최신순</S.SelectorMenu>
        <S.SelectorMenu>|</S.SelectorMenu>
        <S.SelectorMenu $isActive={sortBy == "pop"}>응원순</S.SelectorMenu>
      </S.Selector>

      <S.LanternsList>
        {data.map(item => (
          <S.LanternBox key={item.id}>
            <Link to="/irumiView">
              <Lantern item={item} size={170} />
            </Link>
          </S.LanternBox>
        ))}
      </S.LanternsList>
    </S.LanternsWrapper>
  );
}

export default LanternsSearchForm;
