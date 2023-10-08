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
import Notice from "../../components/notice/Notice";

function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = x => {
    setIsModalOpen(x);
  };
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
      const response = await API.get(`/api/lanterns/random`, {
        withCredentials: true // withCredentials 옵션을 요청 설정 객체에 추가
      });
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

  function trackLanternClick() {
    gtag("event", "Main_Lantern_click", {
      event_category: "Main_Lantern_click"
    });
  }

  function trackClick() {
    gtag("event", "Main_write", {
      event_category: "Main_write"
    });
  }

  return (
    <S.MainWrapper>
      <Moon />
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 30
          }}
          onClick={closeModal}
        />
      )}
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
            <Link to={`/irumi/${item.id}`} onClick={trackLanternClick}>
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
          <Link to="/irumiWrite" onClick={trackClick}>
            <S.MenuBtn>연등 작성하기</S.MenuBtn>
          </Link>
        </S.BtnWrapper>

        <S.MinTitle onClick={showModal}>이용약관</S.MinTitle>
      </S.Btns>

      {isModalOpen ? <Notice type={"main"} closeModal={closeModal} /> : <></>}
    </S.MainWrapper>
  );
}

export default Main;
