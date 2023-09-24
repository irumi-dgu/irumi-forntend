import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./swiper.css";

import "../../assets/animation/animation.css";
// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

import { Link } from "react-router-dom";
import * as S from "./style";

import Lantern from "../../components/lantern/Lantern";

function Main() {
  const data = [
    {
      id: 3,
      nickname: "아코",
      content:
        "동국대 학생들의 소원을 들어주는 이루미! 다가오는 한가위 사랑하는 가족과 함께 즐겁게 보내시길 바랍니다",
      like_cnt: 23,
      lantern_color: 1,
      light_bool: false
    },
    {
      id: 2,
      nickname: "혜정이다옹",
      content: "안-녕-하-세-요-혜-정-입-니-닭! 멋사 일동",
      like_cnt: 23,
      lantern_color: 2,
      light_bool: true
    },
    {
      id: 1,
      nickname: "멀티_서현",
      content: "개발 빨리 끝났으면 좋겠습니다",
      like_cnt: 23,
      lantern_color: 3,
      light_bool: false
    },
    {
      id: 4,
      nickname: "20_김강민",
      content:
        "여친 사귀고 싶다 여백 확인 중 길게길게 써보는 중 어케되나 함보자 배가고프구나",
      like_cnt: 23,
      lantern_color: 4,
      light_bool: true
    },
    {
      id: 5,
      nickname: "디디차",
      content: "재입학 하고 싶어요! 총장님 포카 만들자!",
      like_cnt: 23,
      lantern_color: 5,
      light_bool: true
    },
    {
      id: 6,
      nickname: "이상해준",
      content: "이상해씨도 울고 갈 이상해준",
      like_cnt: 23,
      lantern_color: 1,
      light_bool: true
    },
    {
      id: 7,
      nickname: "밍꼬",
      content:
        "피곤하지만 잠은 절대 자지 않을 꼬야 커밋할꼬야 코딩할꼬야 운영진할꼬야",
      like_cnt: 23,
      lantern_color: 2,
      light_bool: true
    },
    {
      id: 8,
      nickname: "황금막내찬주",
      content: "나는나는야 황금 막내 오찬주이올시다",
      like_cnt: 23,
      lantern_color: 3,
      light_bool: true
    },
    {
      id: 9,
      nickname: "kickcha",
      content: "english neun eo ddeo hal gga? han beon hae bo get seom me da",
      like_cnt: 23,
      lantern_color: 2,
      light_bool: true
    },
    {
      id: 10,
      nickname: "윤재웅",
      content:
        "안녕하세요 동국대 총장 윤재웅입니다. 이루미 서비스 폼 미츠따이! 바로 1천만원 후원하겠습니다!",
      like_cnt: 23,
      lantern_color: 4,
      light_bool: true
    }
  ];

  return (
    <S.MainWrapper>
      <S.MainTitle>현재까지 "1073"개의 연등이 달렸어요!</S.MainTitle>
      <S.SubTitle className="shine">좌우로 드래그 해보세요</S.SubTitle>

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
          <SwiperSlide key={item.id}>
            <Link to="/irumiView">
              <Lantern item={item} size={180} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <S.Btns>
        <S.BtnWrapper>
          <Link to="/lanterns">
            <S.MenuBtn>연등 둘러보기</S.MenuBtn>
          </Link>
          <Link to="/irumiWrite">
            <S.MenuBtn>연등 작성하기</S.MenuBtn>
          </Link>
        </S.BtnWrapper>
        <Link to="/intro">
          <S.MinTitle>이용약관</S.MinTitle>
        </Link>
      </S.Btns>
    </S.MainWrapper>
  );
}

export default Main;
