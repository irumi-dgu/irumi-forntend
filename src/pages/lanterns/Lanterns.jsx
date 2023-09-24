import React, { useEffect, useState } from "react";
import * as S from "./style";
import Lantern from "../../components/lantern/Lantern";
import BackBtn from "../../components/common/backBtn/BackBtn";
import { Link } from "react-router-dom";
import LanternsSearchForm from "../../components/lanterns/lanternsSearchForm/LanternsSearchFrom";

import LanternsWriteBtn from "../../components/lanterns/laternsWriteBtn/LanternsWriteBtn";
import "../../assets/animation/animation.css";
import { API } from "../../api/axios";

function Lanterns() {
  const [sortBy, setSortBy] = useState("recent");
  const [lanternsData, setLanternsData] = useState([]);

  const selectorClick = () => {
    console.log(sortBy);
    sortBy == "recent" ? setSortBy("pop") : setSortBy("recent");
  };

  const fetchLanternsData = async () => {
    try {
      const response = await API.get("/api/lanterns")
      setLanternsData(response.data.results);
      // console.log(response.data.results);
      // console.log(lanternDetail);
    } catch (error) {
      console.log("연등 가져오는 중 에러 발생", error);
    }
  }
  useEffect(() => {
    fetchLanternsData();
  }, [])

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
    }
  ];

  return (
    <>
      <S.LanternsWrapper>
        <LanternsWriteBtn />
        <S.Header>
          <Link to="/">
            <BackBtn />
          </Link>
          <LanternsSearchForm />
        </S.Header>

        <S.Selector onClick={selectorClick}>
          <S.SelectorMenu $isActive={sortBy == "recent"}>최신순</S.SelectorMenu>
          <S.SelectorMenu>|</S.SelectorMenu>
          <S.SelectorMenu $isActive={sortBy == "pop"}>응원순</S.SelectorMenu>
        </S.Selector>

        <S.LanternsList>
          {lanternsData.map((item, index) => (
            // <Link to="/irumi/1" key={index}>
              <S.LanternBox>
                <Lantern item={item} size={180} />
              </S.LanternBox>
            // </Link>
          ))}
        </S.LanternsList>
      </S.LanternsWrapper>
    </>
  );
}

export default Lanterns;
