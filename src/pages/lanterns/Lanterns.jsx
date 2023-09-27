import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";

import { Link } from "react-router-dom";
import { API } from "../../api/axios";

import LanternsSearchForm from "../../components/lanterns/lanternsSearchForm/LanternsSearchFrom";
import LanternsWriteBtn from "../../components/lanterns/laternsWriteBtn/LanternsWriteBtn";
import Lantern from "../../components/lantern/Lantern";
import BackBtn from "../../components/common/backBtn/BackBtn";
import Moon from "../../components/common/moon/Moon";

import "../../assets/animation/animation.css";
import Loading from "../../components/common/loading/Loading";

function Lanterns() {
  //로딩주기
  const [init, setInit] = useState(true);

  //연등불러오기
  const [count, setCount] = useState(0);
  const [sortBy, setSortBy] = useState("recent");
  const [lanternsData, setLanternsData] = useState([]);
  //현재 연등 페이지
  const [lanternsPage, setLanternsPage] = useState(1);

  const selectorClick = () => {
    sortBy == "recent" ? setSortBy("pop") : setSortBy("recent");
    setLanternsPage(1);
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
      setInit(false);
      const response = await API.get(
        `/api/lanterns/${sortBy}?page=${lanternsPage}`
      );
      const newData = lanternsData.concat(response.data.results);
      setLanternsData(newData);
      setInit(true);
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

  //마지막 랜턴리스트 길이 반환
  const LanternsListRef = useRef();
  const [listHeight, setListHeight] = useState(0);

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

  //연등 26개 봤으면 새로 불러오기
  useEffect(() => {
    if (init && position != 0 && count / 26 > lanternsPage) {
      if (position + window.innerHeight > listHeight) {
        setLanternsPage(lanternsPage + 1);
      }
    }
  }, [position]);

  //스크롤했으면 새 페이지 불러오기
  useEffect(() => {
    if (lanternsPage != 1) {
      // console.log("새로운거로드! 페이지 번호 =>", lanternsPage);
      loadLanternsData();
    }
  }, [lanternsPage]);

  return (
    <>
      <S.LanternsWrapper>
        <Moon />
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
        {init ? <></> : <Loading />}
      </S.LanternsWrapper>
    </>
  );
}

export default Lanterns;
