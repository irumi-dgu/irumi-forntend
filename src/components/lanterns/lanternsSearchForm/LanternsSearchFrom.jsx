import React, { useState } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

function LanternsSearchForm() {
  const navigate = useNavigate();
  const [searchWord, setSearchWord] = useState("");
  const changeSearchWord = event => setSearchWord(event.target.value);

  const onSubmit = event => {
    event.preventDefault();
    navigate(`/LanternsSearch?q=${searchWord}`);
  };
  return (
    <S.Search onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="닉네임을 입력해주세요"
        value={searchWord}
        onChange={changeSearchWord}
      />
      <S.SearchIcon>
        <img src="/icon_search.svg" style={{ width: "16px" }} />
      </S.SearchIcon>
    </S.Search>
  );
}

export default LanternsSearchForm;
