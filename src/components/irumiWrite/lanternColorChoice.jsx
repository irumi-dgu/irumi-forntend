import React, { useState } from "react";
import * as S from "./style";

function LanternChoice({ selectedColor, setSelectedColor }) {
  // 색상 숫자 상태 추가
  const [selectedColorNumber, setSelectedColorNumber] = useState(1); // 초기값을 1로 설정

  // 이미지를 클릭 시 호출 함수
  const handleImageClick = colorNumber => {
    setSelectedColorNumber(colorNumber);
    setSelectedColor(colorNumber); // 숫자를 부모 컴포넌트에 전달
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
        onClick={() => handleImageClick(5)} // 5는 보라색에 해당하는 숫자
        style={{ opacity: selectedColorNumber === 5 ? 1 : 0.5 }} // 선택된 색상일 때 opacity를 1로
      />
    </S.lantern>
  );
}

export default LanternChoice;
