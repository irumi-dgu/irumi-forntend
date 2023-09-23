import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import LanternChoice from "../../components/irumiWrite/lanternColorChoice";
import { API } from "../../api/axios";
import BackBtn from "../../components/common/backBtn/BackBtn";

function IrumiWrite() {
  // const location = useLocation();
  const navigate = useNavigate();
  const [selectedColor, setSelectedColor] = useState("pink");
  const [userWish, setUserWish] = useState("");
  const [userWishContent, setUserWishContent] = useState(""); // 사용자의 소원을 저장할 상태 변수
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // 뒤로 가기 버튼 클릭 핸들러
  const handleBackClick = () => {
    navigate(-1);
  };

  // 상태 변수 추가: 폼 데이터 저장
  const [formData, setFormData] = useState({
    nickname: "",
    content: "",
    lanternColor: "",
    password: ""
  });

  // 사용자가 입력한 닉네임 관련 함수
  const handleUserWishChange = event => {
    const content = event.target.value;
    // 공백 제거
    const trimmedContent = content.replace(/\s/g, "");
    if (trimmedContent.length <= 10) {
      setUserWish(trimmedContent);
      // 상태 변수 업데이트
      setFormData({ ...formData, nickname: trimmedContent });
    }
  };

  //사용자가 입력한 소원 내용 관련 함수
  const handleUserWishContent = event => {
    const content = event.target.value;
    // 글자수가 100자를 초과하지 않도록 제한
    if (content.length <= 100) {
      setUserWishContent(content);
      // 상태 변수 업데이트
      setFormData({ ...formData, content: content });
    }
  };

  //비밀번호 관련 함수
  const handlePasswordChange = event => {
    const inputValue = event.target.value;
    if (/^[0-9]*$/.test(inputValue)) {
      setPassword(inputValue);
      setFormData({ ...formData, password: inputValue });
    }
  };

  // 비밀번호 보여주기 토글 함수
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // 제출 버튼 클릭 핸들러
  const handleSubmit = () => {
    // 모든 필수 입력 필드가 채워져 있는지 확인
    if (
      userWish.trim() === "" ||
      userWishContent.trim() === "" ||
      password.trim() === ""
    ) {
      // 필수 입력 필드 중 하나라도 비어 있다면 알림을 표시하고 제출하지 않음
      alert("모든 부분을 입력해주세요 :)");
      return;
    }

    console.log("전송하는 데이터:", formData);

    // 상태 변수 formData를 서버로 전송
    API.post("URL_서버_API_ENDPOINT", formData)
      .then(response => {
        // 서버 응답 처리
        if (response.status === 200) {
          // 성공적으로 제출되면 메인 페이지로 이동
          window.location.href = "/fortune";
        } else {
          // 서버 응답에 따른 처리
          // 오류 처리 로직 추가
        }
      })
      .catch(error => {
        // 오류 처리
        console.error("Error:", error);
        window.location.href = "/fortune";
      });
  };

  return (
    <S.IrumiWriteWrapper>
      <S.BackBtnBox onClick={handleBackClick}>
        <BackBtn />
      </S.BackBtnBox>
      <LanternChoice setSelectedColor={setSelectedColor} />
      <S.wishContent>
        <S.wishBgImg img src={`/write_${selectedColor}.png`} />

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
      <S.Submit>
        <S.SubmitBtn onClick={handleSubmit}>연등 달기</S.SubmitBtn>
      </S.Submit>
    </S.IrumiWriteWrapper>
  );
}

export default IrumiWrite;
