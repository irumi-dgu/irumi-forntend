import React, { useState } from "react";
import * as S from "./style";
import purple from "../../../public/s_lantern_purple.png";
import blue from "../../../public/s_lantern_blue.png";
import green from "../../../public/s_lantern_green.png";
import yellow from "../../../public/s_lantern_yellow.png";
import pink from "../../../public/s_lantern_pink.png";

function LanternChoice() {
  // 각 색상에 대한 상태를 추가합니다.
  const [pinkActive, setPinkActive] = useState(true);
  const [yellowActive, setYellowActive] = useState(true);
  const [greenActive, setGreenActive] = useState(true);
  const [blueActive, setBlueActive] = useState(true);
  const [purpleActive, setPurpleActive] = useState(true);

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
        break;
      case "yellow":
        setPinkActive(false);
        setYellowActive(true);
        setGreenActive(false);
        setBlueActive(false);
        setPurpleActive(false);
        break;
      case "green":
        setPinkActive(false);
        setYellowActive(false);
        setGreenActive(true);
        setBlueActive(false);
        setPurpleActive(false);
        break;
      case "blue":
        setPinkActive(false);
        setYellowActive(false);
        setGreenActive(false);
        setBlueActive(true);
        setPurpleActive(false);
        break;
      case "purple":
        setPinkActive(false);
        setYellowActive(false);
        setGreenActive(false);
        setBlueActive(false);
        setPurpleActive(true);
        break;
      default:
        break;
    }
  };

  return (
    <S.lantern>
      <S.lanternLetter>연등</S.lanternLetter>
      <S.lanternImage
        src={pink}
        alt="분홍색"
        onClick={() => handleImageClick("pink")}
        style={{ opacity: pinkActive ? 1 : 0.5 }}
      />
      <S.lanternImage
        src={yellow}
        alt="노란색"
        onClick={() => handleImageClick("yellow")}
        style={{ opacity: yellowActive ? 1 : 0.5 }}
      />
      <S.lanternImage
        src={green}
        alt="연두색"
        onClick={() => handleImageClick("green")}
        style={{ opacity: greenActive ? 1 : 0.5 }}
      />
      <S.lanternImage
        src={blue}
        alt="파란색"
        onClick={() => handleImageClick("blue")}
        style={{ opacity: blueActive ? 1 : 0.5 }}
      />
      <S.lanternImage
        src={purple}
        alt="보라색"
        onClick={() => handleImageClick("purple")}
        style={{ opacity: purpleActive ? 1 : 0.5 }}
      />
    </S.lantern>
  );
}

export default LanternChoice;
