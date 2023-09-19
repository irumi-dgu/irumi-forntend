import React from 'react'
import * as S from "./style";

function DetailLantern() {
    // get 해온거 -> 1이면 빨강
    const data = [{
        "id": 3,
		"nickname": "20 김강민",
		"content": "여친 사귀고 싶다 여백 확인 중 길게길게 써보는 중 어케되나 함보자",
		"likes": 23,
		"lanternColor": 5,
		"twinkle": true,
    }]

    // 연등 -> 이미지로 매핑
    const getImageUrl = (lanternColor, twinkle) => {
        if (lanternColor >= 1 && lanternColor <= 5) {
            const twinkleToggle = twinkle ? "yes" : "no";
            return `/detail_${lanternColor}_${twinkleToggle}.svg`;
        }
        return "/detail_1_yes.svg";
    }

  return (
    <>
        {data.map((item) => (
            <S.DetailLanternWrapper key={item.id}>
                <img src={getImageUrl(item.lanternColor, item.twinkle)} />
                <S.TitleSec>{item.nickname}</S.TitleSec>
                <S.ContentSec>{item.content}</S.ContentSec>
            </S.DetailLanternWrapper>
        ))}
    </>
  )
}

export default DetailLantern