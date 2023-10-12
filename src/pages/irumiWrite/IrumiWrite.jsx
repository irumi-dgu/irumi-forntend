import React, { useState } from "react";
import * as S from "./style";
import LanternChoice from "../../components/irumiWrite/lanternColorChoice";
import BackBtn from "../../components/common/backBtn/BackBtn";
import { API } from "../../api/axios";
import MyDetail from "../fortune/MyDetail";
import Modal from "../../components/irumiWrite/ConfirmModal";

// function IrumiWrite() {
//   const [selectedColor, setSelectedColor] = useState("1");
//   const [userWish, setUserWish] = useState("");
//   const [userWishContent, setUserWishContent] = useState(""); // 사용자의 소원을 저장할 상태 변수
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const [dataToShare, setDataToShare] = useState([]);

//   // '작성하기' 버튼의 스타일을 동적으로 변경하기 위한 상태 변수
//   const [submitButtonActive, setSubmitButtonActive] = useState(false);

//   // 사용자가 입력한 닉네임 관련 함수
//   const handleUserWishChange = event => {
//     const content = event.target.value;
//     // 공백 제거
//     const trimmedContent = content.replace(/\s/g, "");
//     if (trimmedContent.length <= 8) {
//       setUserWish(trimmedContent);
//       updateSubmitButtonStyle();
//     }
//   };

//   //사용자가 입력한 소원 내용 관련 함수
//   const handleUserWishContent = event => {
//     const content = event.target.value;
//     // 글자수가 80자를 초과하지 않도록 제한
//     if (content.length <= 80) {
//       setUserWishContent(content);
//       updateSubmitButtonStyle();
//     }
//   };

//   //비밀번호 관련 함수
//   const handlePasswordChange = event => {
//     const inputValue = event.target.value;
//     if (/^[0-9]*$/.test(inputValue)) {
//       setPassword(inputValue);
//       updateSubmitButtonStyle();
//     }
//   };

//   // 비밀번호 보여주기 토글 함수
//   const toggleShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   const trackSubmission = () => {
//     gtag("event", "lanterColor_submission", {
//       event_category: "lanterColor_submission"
//     });
//   };

//   // '작성하기' 버튼의 스타일 업데이트 함수
//   const updateSubmitButtonStyle = () => {
//     const userWishNotEmpty = userWish.trim() !== "";
//     const userWishContentNotEmpty = userWishContent.trim() !== "";
//     const passwordNotEmpty = password.trim() !== "";
//     setSubmitButtonActive(
//       userWishNotEmpty && userWishContentNotEmpty && passwordNotEmpty
//     );
//   };

function IrumiWrite() {
  const [selectedColor, setSelectedColor] = useState("1");
  const [userWish, setUserWish] = useState("");
  const [userWishContent, setUserWishContent] = useState(""); // 사용자의 소원을 저장할 상태 변수
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // '작성하기' 버튼의 스타일을 동적으로 변경하기 위한 상태 변수
  const [submitButtonActive, setSubmitButtonActive] = useState(false);

  // 사용자가 입력한 닉네임 관련 함수
  const handleUserWishChange = event => {
    const content = event.target.value;
    // 입력 필터링을 수행
    const sanitizedContent = sanitizeInput(content);
    // 공백 제거
    const trimmedContent = sanitizedContent.trim();
    if (trimmedContent.length <= 8) {
      setUserWish(trimmedContent);
      updateSubmitButtonStyle();
    }
  };

  // 사용자가 입력한 소원 내용 관련 함수
  const handleUserWishContent = event => {
    const content = event.target.value;
    // 입력 필터링을 수행
    const sanitizedContent = sanitizeInput(content);
    // 글자수가 80자를 초과하지 않도록 제한
    if (sanitizedContent.length <= 80) {
      setUserWishContent(sanitizedContent);
      updateSubmitButtonStyle();
    }
  };

  // 비밀번호 관련 함수
  const handlePasswordChange = event => {
    const inputValue = event.target.value;
    // 숫자 4자리만 허용 (숫자 이외의 문자는 제거)
    const sanitizedInput = inputValue.replace(/[^0-9]/g, "").slice(0, 4);
    setPassword(sanitizedInput);
    updateSubmitButtonStyle();
  };

  // 비밀번호 보여주기 토글 함수
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const trackSubmission = () => {
    gtag("event", "lanterColor_submission", {
      event_category: "lanterColor_submission"
    });
  };

  // '작성하기' 버튼의 스타일 업데이트 함수
  const updateSubmitButtonStyle = () => {
    const userWishNotEmpty = userWish.trim() !== "";
    const userWishContentNotEmpty = userWishContent.trim() !== "";
    const passwordNotEmpty = password.trim() !== "";
    setSubmitButtonActive(
      userWishNotEmpty && userWishContentNotEmpty && passwordNotEmpty
    );
  };

  // 입력 필터링 함수
  const sanitizeInput = input => {
    // 특수 문자나 스크립트 제거 또는 이스케이핑을 수행
    return input.replace(/<script>|<\/script>/gi, "");
  };

  // 예시: 연등 컴포넌트 내에서 이벤트 추적 함수 호출
  function handleColorChange(color) {
    setSelectedColor(color);

    // Google Analytics 이벤트 추적
    gtag("event", "Color_Selection", {
      event_category: "Color_Selection",
      event_label: color // 선택된 색상을 이벤트 레이블로 사용
    });

    // 기존 코드 - 선택한 색상 업데이트
    setSelectedColor(color);
  }

  function handleSubmit() {
    if (!submitButtonActive) {
      alert("모든 부분을 입력해주세요 :)");
      return;
    }

    if (password.length !== 4) {
      alert("비밀번호를 4자리로 입력해주세요!");
      return;
    }

    // 원하는 동적인 색상 값을 추출하고 event_label에 설정
    const submittedColorLabel = `Lantern_Color_Submission_${selectedColor}`;

    gtag("event", "Lantern_Color_Submission", {
      event_category: "Lantern_Color_Submission",
      event_label: submittedColorLabel // 동적으로 설정된 색상 값
    });

    setIsModalOpen(true); // 모달 열기
  }

  //쿠키로 정보 받아오는 뭐 그런 지피티 코드인데 쓰레기같음
  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== "") {
      const cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.substring(0, name.length + 1) === name + "=") {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }

  const csrfToken = getCookie("csrftoken");

  // 모달 확인 버튼을 클릭했을 때 실행될 함수
  const handleConfirmSubmit = async () => {
    try {
      const response = await API.post(
        "/api/lanterns",
        {
          nickname: userWish,
          content: userWishContent,
          lanternColor: selectedColor,
          password: password,
          light_bool: false
        },
        {
          withCredentials: true, // withCredentials 옵션을 요청 설정 객체에 추가
          headers: {
            "X-CSRFToken": csrfToken
          }
        }
      );

      // 서버 응답 처리
      if (response.status === 200) {
        // 성공적으로 제출되면 포춘 페이지로 이동
        // window.location.href = "/fortune";
        window.location.href = `/fortune/${response.data.id}`;
        // console.log(response.data.id);
        // console.log("됐닥");
      } else {
        // window.location.href = "/fortune";
        window.location.href = `/fortune/${response.data.id}`;
        // console.log(response.data.id);
        // console.log("됐닥");
      }
    } catch (error) {
      // 오류 처리
      // console.log("안됐단다", error);

      if (error.response) {
        // 서버에서 응답이 왔지만 오류 응답인 경우
        // console.log("오류 응답 데이터:", error);
      } else if (error.request) {
        // 서버로 요청을 보냈지만 응답을 받지 못한 경우
        // console.log("요청이 응답을 받지 못했습니다.");
      } else {
        // 요청을 보내기 전에 발생한 오류
        // console.error("오류 메시지:", error.message);
      }
    }
  };
  // 모달 취소 버튼을 클릭했을 때 실행될 함수
  const handleCloseModal = () => {
    setIsModalOpen(false); // 모달을 닫기 위해 상태를 변경합니다.
  };

  return (
    <S.IrumiWriteWrapper>
      <S.Header>
        <BackBtn />
        <LanternChoice
          selectedColor={selectedColor}
          setSelectedColor={handleColorChange} // 컬러 선택 핸들러 전달
          value={selectedColor}
        />
      </S.Header>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmSubmit}
      />

      <S.wishContent>
        <S.wishBgImg img src={`/write_${selectedColor}.svg`} />
        <S.TextareaName>닉네임</S.TextareaName>

        <S.NameInput
          value={userWish}
          onChange={handleUserWishChange}
          placeholder="8자 이내로 작성해주세요."
        />
        <S.TextareaContent>소원 내용</S.TextareaContent>
        <S.ContentInput
          value={userWishContent}
          onChange={handleUserWishContent}
          placeholder="80자 이내로 작성해주세요."
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
        <S.SubmitBtn onClick={handleSubmit} active={submitButtonActive}>
          연등 달기
        </S.SubmitBtn>
      </S.wishContent>
    </S.IrumiWriteWrapper>
  );
}

export default IrumiWrite;
