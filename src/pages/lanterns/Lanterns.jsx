import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";

import { Link } from "react-router-dom";
import { API } from "../../api/axios";

import LanternsSearchForm from "../../components/lanterns/lanternsSearchForm/LanternsSearchFrom";
import LanternsWriteBtn from "../../components/lanterns/laternsWriteBtn/LanternsWriteBtn";
import Lantern from "../../components/lantern/Lantern";
import BackBtn from "../../components/common/backBtn/BackBtn";

import "../../assets/animation/animation.css";

function Lanterns() {
  //연등불러오기
  const [count, setCount] = useState(0);
  const [sortBy, setSortBy] = useState("recent");
  const [lanternsData, setLanternsData] = useState([]);
  //현재 연등 페이지
  const [lanternsPage, setLanternsPage] = useState(1);

  const selectorClick = () => {
    console.log(sortBy);
    sortBy == "recent" ? setSortBy("pop") : setSortBy("recent");
  };

  //초기 데이터 불러오기
  const fetchLanternsData = async () => {
    try {
      const response = await API.get(
        `/api/lanterns/${sortBy}?page=${lanternsPage}`
      );
      setCount(response.data.count);
      setLanternsData(response.data.results);
    } catch (error) {
      console.log("연등 가져오는 중 에러 발생", error);
    }
  };
  //스크롤 시 더 불러오기
  const loadLanternsData = async () => {
    try {
      const response = await API.get(
        `/api/lanterns/${sortBy}?page=${lanternsPage}`
      );
      const newData = lanternsData.concat(response.data.results);
      setLanternsData(newData);
    } catch (error) {
      console.log("연등 가져오는 중 에러 발생", error);
    }
  };
  //처음 로딩될때 초기값넣기
  useEffect(() => {
    fetchLanternsData();
  }, []);
  //소트 바꿨을때 초기 값 넣기
  useEffect(() => {
    fetchLanternsData();
  }, [sortBy]);

  //현재스크롤 반환
  const [position, setPosition] = useState(0);
  function onScroll() {
    setListHeight(LanternsListRef.current?.offsetHeight);
    setPosition(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  //마지막 랜턴리스트 길이 반환
  const LanternsListRef = useRef();
  const [listHeight, setListHeight] = useState(0);

  //연등 26개 봤으면 새로 불러오기
  useEffect(() => {
    if (position != 0 && count / 26 > lanternsPage) {
      console.log(position, window.innerHeight, listHeight);
      if (position + window.innerHeight > listHeight) {
        console.log("새로운거로드!");
        setLanternsPage(lanternsPage + 1);
      }
    }
  }, [position]);

  //스크롤했으면 새 페이지 불러오기
  useEffect(() => {
    loadLanternsData();
  }, [lanternsPage]);

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

        <S.LanternsList ref={LanternsListRef}>
          {lanternsData.map((item, index) => (
            <Link to={`/irumi/${item.id}`} key={index}>
              <S.LanternBox>
                <Lantern item={item} size={180} />
              </S.LanternBox>
            </Link>
          ))}
        </S.LanternsList>
      </S.LanternsWrapper>
    </>
  );
}

export default Lanterns;
