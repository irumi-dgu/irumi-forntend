import React, { useState } from "react";
import * as S from "./style";
import Back from "../../../public/back.png";
import LanternChoice from "../../components/irumiWrite/lanternColorChoice";

function IrumiWrite() {
  const [selectedColor, setSelectedColor] = useState("pink");
  const [userWish, setUserWish] = useState("");
  const [userWishContent, setUserWishContent] = useState(""); // 사용자의 소원을 저장할 상태 변수
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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

  //비밀번호 관련 함수
  const handlePasswordChange = event => {
    const inputValue = event.target.value;
    if (/^[0-9]*$/.test(inputValue)) {
      setPassword(inputValue);
    }
  };

  // 비밀번호 보여주기 토글 함수
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
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
          <S.WritePw>
            <S.WritePwLetter>비밀번호</S.WritePwLetter>
            <S.PasswordInput
              placeholder="숫자 4자리"
              minLength={4}
              maxLength={4}
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handlePasswordChange}
              required
              inputMode="numeric"
            />
            <S.ShowPasswordIcon onClick={toggleShowPassword}>
              <img
                src={showPassword ? "/write_pw_open.png" : "/write_pw_un.png"}
                alt={showPassword ? "보임" : "숨김"}
              />
            </S.ShowPasswordIcon>
          </S.WritePw>
        </S.Textarea>
      </S.wishContent>
    </S.IrumiWriteWrapper>
  );
}

export default IrumiWrite;
