import React, { useState } from "react";
import * as S from "./style";
import Back from "../../../public/back.png";
import LanternChoice from "../../components/irumiWrite/lanternColorChoice";

function IrumiWrite() {
  const [selectedColor, setSelectedColor] = useState("pink");
  const [userWish, setUserWish] = useState("");
  const [userWishContent, setUserWishContent] = useState(""); // 사용자의 소원을 저장할 상태 변수

  // 사용자가 입력한 닉네임 관련 함수
  const handleUserWishChange = event => {
    const content = event.target.value;
    // 공백 제거
    const trimmedContent = content.replace(/\s/g, "");
    if (trimmedContent.length <= 10) {
      setUserWish(trimmedContent);
    }
  };

  //사용자가 입력한 소원 내용 관련 함수
  const handleUserWishContent = event => {
    const content = event.target.value;
    // 글자수가 100자를 초과하지 않도록 제한
    if (content.length <= 100) {
      setUserWishContent(content);
    }
  };

  return (
    <S.IrumiWriteWrapper>
      <S.backStyledImage src={Back} alt="이전" />
      <LanternChoice setSelectedColor={setSelectedColor} />
      <S.wishContent>
        <S.wishBgImg img src={`/write_${selectedColor}.png`} />
        {/* 이미지 위에 텍스트 입력란 */}
        <S.Textarea>
          <S.TextareaName>닉네임</S.TextareaName>

          <S.NameInput
            value={userWish}
            onChange={handleUserWishChange}
            placeholder="닉네임을 입력하세요.(최대 10자, 공백 사용 불가)"
          />
          <S.TextareaContent>소원 내용</S.TextareaContent>
          <S.ContentInput
            value={userWishContent}
            onChange={handleUserWishContent}
            placeholder="소원 내용을 입력해주세요.(100자 이내)"
          />
        </S.Textarea>
      </S.wishContent>
    </S.IrumiWriteWrapper>
  );
}

export default IrumiWrite;
