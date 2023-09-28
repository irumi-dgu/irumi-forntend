import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";

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
import { useEffect, useState } from "react";

import { API } from "../../api/axios";

//import Moon (For About Page)
import Moon from "../../components/common/moon/Moon";

function Main() {
  const navigate = useNavigate();
  // 페이지가 로드될 때 실행되는 함수
  const checkFirstVisit = () => {
    // localStorage에서 isFirst 값을 가져옴
    const isFirstVisit = localStorage.getItem("isFirst");

    if (!isFirstVisit) {
      // isFirst 값이 없으면(처음 들어오는 유저라면) 처리
      localStorage.setItem("isFirst", "true"); // isFirst 값을 저장
      navigate("/intro"); // '/about' 페이지로 이동
    }
  };

  // 페이지 로드될 때 checkFirstVisit 함수 실행
  useEffect(() => {
    checkFirstVisit();
  }, []);

  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  const fetchLanternsData = async () => {
    try {
      const response = await API.get(`/api/lanterns/random`);
      // console.log(response);
      setCount(response.data.totCount);
      setData(response.data.lanterns);
    } catch (error) {
      console.log("연등 가져오는 중 에러 발생", error);
    }
  };
  useEffect(() => {
    fetchLanternsData();
  }, []);

  return (
    <S.MainWrapper>
      <Moon />
      <S.MainTitle>현재까지 "{count}"개의 연등이 달렸어요!</S.MainTitle>
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
            <Link to={`/irumi/${item.id}`}>
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
