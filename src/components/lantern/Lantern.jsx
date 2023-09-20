import React from "react";
import * as S from "./style";

function Lantern({ item }) {
  const getImageUrl = (lanternColor, twinkle) => {
    if (lanternColor >= 1 && lanternColor <= 5) {
      const twinkleToggle = twinkle ? "yes" : "no";
      return `/lanterns_${lanternColor}_${twinkleToggle}.svg`;
    }
    return "/lanterns_1_yes.svg";
  };

  return (
    <S.LanternWrapper>
      <S.TitleSec>{item.nickname}</S.TitleSec>
      <S.ContentSec>{item.content}</S.ContentSec>
      <S.LikeBtn>
        <img src="/detail_like_fill.png" />
        <p>{item.likes}</p>
      </S.LikeBtn>
      <img src={getImageUrl(item.lanternColor, item.twinkle)} />
    </S.LanternWrapper>
  );
}
export default Lantern;
