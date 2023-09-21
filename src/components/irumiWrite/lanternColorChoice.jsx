import React, { useState } from "react";
import * as S from "./style";

function LanternChoice({ setSelectedColor }) {
  // 각 색상에 대한 상태를 추가합니다.
  const [pinkActive, setPinkActive] = useState(true);
  const [yellowActive, setYellowActive] = useState(false);
  const [greenActive, setGreenActive] = useState(false);
  const [blueActive, setBlueActive] = useState(false);
  const [purpleActive, setPurpleActive] = useState(false);

  // 이미지를 클릭 시 호출 함수
  const handleImageClick = color => {
    // 클릭한 색상에 따라 해당 색상의 상태 변경.
    switch (color) {
      case "pink":
        setPinkActive(true);
        setYellowActive(false);
        setGreenActive(false);
        setBlueActive(false);
        setPurpleActive(false);
        setSelectedColor("pink"); // 선택된 색상을 업데이트
        break;
      case "yellow":
        setPinkActive(false);
        setYellowActive(true);
        setGreenActive(false);
        setBlueActive(false);
        setPurpleActive(false);
        setSelectedColor("yellow"); // 선택된 색상을 업데이트
        break;
      case "green":
        setPinkActive(false);
        setYellowActive(false);
        setGreenActive(true);
        setBlueActive(false);
        setPurpleActive(false);
        setSelectedColor("green"); // 선택된 색상을 업데이트
        break;
      case "blue":
        setPinkActive(false);
        setYellowActive(false);
        setGreenActive(false);
        setBlueActive(true);
        setPurpleActive(false);
        setSelectedColor("blue"); // 선택된 색상을 업데이트
        break;
      case "purple":
        setPinkActive(false);
        setYellowActive(false);
        setGreenActive(false);
        setBlueActive(false);
        setPurpleActive(true);
        setSelectedColor("purple"); // 선택된 색상을 업데이트
        break;
      default:
        break;
    }
  };

  return (
    <S.lantern>
      <S.lanternLetter>연등</S.lanternLetter>
      <S.lanternImage
        img
        src="/s_lantern_pink.png"
        alt="분홍색"
        onClick={() => handleImageClick("pink")}
        style={{ opacity: pinkActive ? 1 : 0.5 }}
      />
      <S.lanternImage
        img
        src="/s_lantern_yellow.png"
        alt="노란색"
        onClick={() => handleImageClick("yellow")}
        style={{ opacity: yellowActive ? 1 : 0.5 }}
      />
      <S.lanternImage
        img
        src="s_lantern_green.png"
        alt="연두색"
        onClick={() => handleImageClick("green")}
        style={{ opacity: greenActive ? 1 : 0.5 }}
      />
      <S.lanternImage
        img
        src="s_lantern_blue.png"
        alt="파란색"
        onClick={() => handleImageClick("blue")}
        style={{ opacity: blueActive ? 1 : 0.5 }}
      />
      <S.lanternImage
        img
        src="s_lantern_purple.png"
        alt="보라색"
        onClick={() => handleImageClick("purple")}
        style={{ opacity: purpleActive ? 1 : 0.5 }}
      />
    </S.lantern>
  );
}

export default LanternChoice;
