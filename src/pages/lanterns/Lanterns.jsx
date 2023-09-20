import React from "react";
import * as S from "./style";

function Lanterns() {
  // get 해올거
  const data = [
    {
      id: 3,
      nickname: "일이삼사오육칠팔",
      content:
        "여친 사귀고 싶다 여백 확인 중 길게길게 써보는 중 어케되나 함보자 배가고프구나",
      likes: 23,
      lanternColor: 5,
      twinkle: false
    },
    {
      id: 2,
      nickname: "20_김강민",
      content:
        "여친 사귀고 싶다 여백 확인 중 길게길게 써보는 중 어케되나 함보자 배가고프구나",
      likes: 23,
      lanternColor: 4,
      twinkle: true
    },
    {
      id: 2,
      nickname: "멀티_서현",
      content: "개발 빨리 끝났으면 좋겠습니다",
      likes: 23,
      lanternColor: 2,
      twinkle: true
    }
  ];

  const getImageUrl = (lanternColor, twinkle) => {
    if (lanternColor >= 1 && lanternColor <= 5) {
      const twinkleToggle = twinkle ? "yes" : "no";
      return `/lanterns_${lanternColor}_${twinkleToggle}.svg`;
    }
    return "/lanterns_1_yes.svg";
  };

  return (
    <S.LanternsWrapper>
      <S.LanternsList>
        {data.map(item => (
          <S.LanternBox key={item.id}>
            <S.Lantern>
              <S.TitleSec>{item.nickname}</S.TitleSec>
              <S.ContentSec>{item.content}</S.ContentSec>
              <S.LikeBtn>
                <img src="/detail_like_fill.png" />
                <p>{item.likes}</p>
              </S.LikeBtn>
              <img src={getImageUrl(item.lanternColor, item.twinkle)} />
            </S.Lantern>
          </S.LanternBox>
        ))}
      </S.LanternsList>
    </S.LanternsWrapper>
  );
}

export default Lanterns;
