import React, { useState } from "react";
import * as S from "./style";

function LanternChoice({ setSelectedColor }) {
  // 선택한 색상 상태 추가
  const [selectedColorNumber, setSelectedColorNumber] = useState(1); // 초기값을 1로 설정

  // 이미지를 클릭 시 호출 함수
  const handleImageClick = colorNumber => {
    // 선택한 색상의 숫자를 업데이트
    setSelectedColorNumber(colorNumber);
    setSelectedColor(mapNumberToColor(colorNumber)); // 숫자를 색상 문자열로 변환하여 부모 컴포넌트에 전달
  };

  // 숫자를 색상 문자열로 매핑하는 함수
  const mapNumberToColor = number => {
    switch (number) {
      case 1:
        return "pink";
      case 2:
        return "yellow";
      case 3:
        return "green";
      case 4:
        return "blue";
      case 6:
        return "purple";
      default:
        return "pink"; // 기본값 설정
    }
  };

  return (
    <S.lantern>
      <S.lanternLetter>연등</S.lanternLetter>
      <S.lanternImage
        img
        src="/s_lantern_pink.png"
        alt="분홍색"
        onClick={() => handleImageClick(1)} // 1은 분홍색에 해당하는 숫자
        style={{ opacity: selectedColorNumber === 1 ? 1 : 0.5 }} // 선택된 색상일 때 opacity를 1로
      />
      <S.lanternImage
        img
        src="/s_lantern_yellow.png"
        alt="노란색"
        onClick={() => handleImageClick(2)} // 2는 노란색에 해당하는 숫자
        style={{ opacity: selectedColorNumber === 2 ? 1 : 0.5 }} // 선택된 색상일 때 opacity를 1로
      />
      <S.lanternImage
        img
        src="s_lantern_green.png"
        alt="연두색"
        onClick={() => handleImageClick(3)} // 3은 연두색에 해당하는 숫자
        style={{ opacity: selectedColorNumber === 3 ? 1 : 0.5 }} // 선택된 색상일 때 opacity를 1로
      />
      <S.lanternImage
        img
        src="s_lantern_blue.png"
        alt="파란색"
        onClick={() => handleImageClick(4)} // 4는 파란색에 해당하는 숫자
        style={{ opacity: selectedColorNumber === 4 ? 1 : 0.5 }} // 선택된 색상일 때 opacity를 1로
      />
      <S.lanternImage
        img
        src="s_lantern_purple.png"
        alt="보라색"
        onClick={() => handleImageClick(6)} // 6은 보라색에 해당하는 숫자
        style={{ opacity: selectedColorNumber === 6 ? 1 : 0.5 }} // 선택된 색상일 때 opacity를 1로
      />
    </S.lantern>
  );
}

export default LanternChoice;
