import React from 'react'
import * as S from "./style";

function DetailLantern() {
    // get 해온거 -> 1이면 빨강
    const data = [{
        "id": 3,
		"nickname": "김강민",
		"content": "여친 사귀고 싶다",
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
                <S.TitleSec>광홍 20 윤혜정</S.TitleSec>
                <S.ContentSec>올해 우리 가족 무탈하게<br/>잘 마무리 하길...</S.ContentSec>
            </S.DetailLanternWrapper>
        ))}
    </>
  )
}

export default DetailLantern