// IrumiWrite.jsx

import React, { useState } from "react";
import * as S from "./style";
import Back from "../../../public/back.png";
import LanternChoice from "../../components/irumiWrite/lanternColorChoice";

function IrumiWrite() {
  const [selectedColor, setSelectedColor] = useState("pink");

  return (
    <S.IrumiWriteWrapper>
      <S.backStyledImage src={Back} alt="이전" />
      {/* LanternChoice 컴포넌트에 setSelectedColor를 전달합니다. */}
      <LanternChoice setSelectedColor={setSelectedColor} />
      {/* selectedColor에 따라 이미지 설정 */}
      <S.wishBgImg img src={`/write_${selectedColor}.png`} />
    </S.IrumiWriteWrapper>
  );
}

export default IrumiWrite;
