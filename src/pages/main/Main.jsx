import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./style";

import { set, throttle } from "lodash";
import Lantern from "../../components/lantern/Lantern";

function Main() {
  const scrollRef = useRef(null);
  const [isDrag, setIsDrag] = useState(false);

  const [startX, setStartX] = useState();
  const [nowData, setNowData] = useState([0, 1, 2, 3, 4]);

  const [dragStart, setDragStart] = useState([0, 0]);
  const [dragEnd, setDragEnd] = useState([0, 0]);

  // 드래그하기
  const onDragStart = e => {
    e.preventDefault();
    setDragStart([e.clientX, e.clientY]);
    setIsDrag(true);
  };

  //드래그 끝내기
  //is
  const onDragEnd = e => {
    e.preventDefault();
    if (isDrag) {
      setDragEnd([e.clientX, e.clientY]);
      setIsDrag(false);

      let newData = [];

      if (dragStart[0] - dragEnd[0] > 10) {
        //오른쪽으로 스와이프
        newData = nowData.map(item => {
          //데이터가 가장 오른쪽 끝일경우는 1번데이터를 불러온다
          if (item + 1 == data.length) {
            return 1;
          }
          return item + 1;
        });
      } else if (dragStart[0] - dragEnd[0] < -10) {
        //왼쪽으로 스와이프

        newData = nowData.map(item => {
          //데이터가 가장 왼쪽 끝일경우는 마지막 데이터를 불러온다
          if (item - 1 == 0) {
            return data.length - 1;
          }
          return item - 1;
        });
      } else {
        return;
      }
      setNowData(newData);
    }
  };

  useEffect(() => {
    console.log(data.length);
  }, [nowData]);

  const onDragMove = e => {
    if (isDrag) {
      scrollRef.current.scrollLeft = startX - e.pageX;
    }
  };
  const delay = 100;
  const onThrottleDragMove = throttle(onDragMove, delay);
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
      id: 1,
      nickname: "멀티_서현",
      content: "개발 빨리 끝났으면 좋겠습니다",
      likes: 23,
      lanternColor: 2,
      twinkle: true
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
      lanternColor: 4,
      twinkle: true
    },
    {
      id: 6,
      nickname: "20_김강민",
      content:
        "여친 사귀고 싶다 여백 확인 중 길게길게 써보는 중 어케되나 함보자 배가고프구나",
      likes: 23,
      lanternColor: 4,
      twinkle: true
    },
    {
      id: 7,
      nickname: "20_김강민",
      content:
        "여친 사귀고 싶다 여백 확인 중 길게길게 써보는 중 어케되나 함보자 배가고프구나",
      likes: 23,
      lanternColor: 4,
      twinkle: true
    },
    {
      id: 8,
      nickname: "20_김강민",
      content:
        "여친 사귀고 싶다 여백 확인 중 길게길게 써보는 중 어케되나 함보자 배가고프구나",
      likes: 23,
      lanternColor: 4,
      twinkle: true
    },
    {
      id: 9,
      nickname: "20_김강민",
      content:
        "여친 사귀고 싶다 여백 확인 중 길게길게 써보는 중 어케되나 함보자 배가고프구나",
      likes: 23,
      lanternColor: 4,
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
      <S.Swiper
        onMouseDown={onDragStart}
        onMouseMove={isDrag ? onThrottleDragMove : null}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
        ref={scrollRef}
      >
        {nowData.map(item =>
          item == nowData[2] ? (
            <S.SwiperSlideActive>
              <Lantern key={item} item={item} />
            </S.SwiperSlideActive>
          ) : (
            <S.SwiperSlide key={item}>{item}</S.SwiperSlide>
          )
        )}
      </S.Swiper>

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
