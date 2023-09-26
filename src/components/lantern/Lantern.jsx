import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

function Lantern({ item, size }) {
  const navigate = useNavigate();

  let titleFontSize = size / 15;
  let contentFontSize = size / 18;

  // const getImageUrl = (lanternColor, twinkle) => {
  //   if (lanternColor >= 1 && lanternColor <= 5) {
  //     const twinkleToggle = twinkle ? "yes" : "no";
  //     return `/lanterns_${lanternColor}_${twinkleToggle}.svg`;
  //   }
  //   return "/lanterns_1_yes.svg";
  // };

  return (
    <S.LanternWrapper
      className="lantern"
      size={size}
      onClick={() => navigate(`/irumi/${item.id}`)}
    >
      <S.TitleSec fontSize={titleFontSize}>{item.nickname}</S.TitleSec>
      <S.ContentSec fontSize={contentFontSize}>{item.content}</S.ContentSec>
      <S.LikeBtn fontSize={contentFontSize}>
        <img src="/detail_like_fill.png" />
        <p>{item.like_cnt}</p>
      </S.LikeBtn>
      <img src={`/detail_${item.lanternColor}_${item.light_bool}.png`} />
    </S.LanternWrapper>
  );
}
export default Lantern;
