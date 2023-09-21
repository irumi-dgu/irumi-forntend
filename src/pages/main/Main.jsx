import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./swiper.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./style";

import Lantern from "../../components/lantern/Lantern";

function Main() {
  const [isDrag, setIsDrag] = useState(false);

  const [nowData, setNowData] = useState([0, 1, 2, 3, 4]);

  const [dragStart, setDragStart] = useState([0, 0]);
  const [dragEnd, setDragEnd] = useState([0, 0]);

  const data = [
    {
      id: 3,
      nickname: "일이삼사오육칠팔",
      content:
        "여친 사귀고 싶다 여백 확인 중 길게길게 써보는 중 어케되나 함보자 배가고프구나",
      likes: 23,
      lanternColor: 1,
      twinkle: false
    },
    {
      id: 2,
      nickname: "20_김강민",
      content:
        "여친 사귀고 싶다 여백 확인 중 길게길게 써보는 중 어케되나 함보자 배가고프구나",
      likes: 23,
      lanternColor: 2,
      twinkle: true
    },
    {
      id: 1,
      nickname: "멀티_서현",
      content: "개발 빨리 끝났으면 좋겠습니다",
      likes: 23,
      lanternColor: 3,
      twinkle: false
    },
    {
      id: 4,
      nickname: "20_김강민",
      content:
        "여친 사귀고 싶다 여백 확인 중 길게길게 써보는 중 어케되나 함보자 배가고프구나",
      likes: 23,
      lanternColor: 4,
      twinkle: true
    },
    {
      id: 5,
      nickname: "20_김강민",
      content:
        "여친 사귀고 싶다 여백 확인 중 길게길게 써보는 중 어케되나 함보자 배가고프구나",
      likes: 23,
      lanternColor: 5,
      twinkle: true
    },
    {
      id: 6,
      nickname: "20_김강민",
      content:
        "여친 사귀고 싶다 여백 확인 중 길게길게 써보는 중 어케되나 함보자 배가고프구나",
      likes: 23,
      lanternColor: 1,
      twinkle: true
    },
    {
      id: 7,
      nickname: "20_김강민",
      content:
        "여친 사귀고 싶다 여백 확인 중 길게길게 써보는 중 어케되나 함보자 배가고프구나",
      likes: 23,
      lanternColor: 2,
      twinkle: true
    },
    {
      id: 8,
      nickname: "20_김강민",
      content:
        "여친 사귀고 싶다 여백 확인 중 길게길게 써보는 중 어케되나 함보자 배가고프구나",
      likes: 23,
      lanternColor: 3,
      twinkle: true
    },
    {
      id: 9,
      nickname: "20_김강민",
      content:
        "여친 사귀고 싶다 여백 확인 중 길게길게 써보는 중 어케되나 함보자 배가고프구나",
      likes: 23,
      lanternColor: 2,
      twinkle: true
    },
    {
      id: 10,
      nickname: "20_김강민",
      content:
        "여친 사귀고 싶다 여백 확인 중 길게길게 써보는 중 어케되나 함보자 배가고프구나",
      likes: 23,
      lanternColor: 4,
      twinkle: true
    }
  ];

  return (
    <S.MainWrapper>
      <S.MainTitle>현재까지 "1073"개의 연등이 달렸어요!</S.MainTitle>
      <S.SubTitle>좌우로 드래그 해보세요</S.SubTitle>

      <Swiper
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false
        }}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {data.map(item => (
          <SwiperSlide>
            <Lantern item={item} size={180} />
          </SwiperSlide>
        ))}
      </Swiper>

      <S.BtnWrapper>
        <Link to="/lanterns">
          <S.MenuBtn>연등 둘러보기</S.MenuBtn>
        </Link>
        <Link to="/irumiWrite">
          <S.MenuBtn>연등 작상하기</S.MenuBtn>
        </Link>
      </S.BtnWrapper>
    </S.MainWrapper>
  );
}

export default Main;
