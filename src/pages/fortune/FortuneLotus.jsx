import React, { useState, useEffect } from "react";
import * as S from "./style";
import { Link } from "react-router-dom";
import { API } from "../../api/axios";

const FortuneLotus = () => {
  const [fortuneMessage, setFortuneMessage] = useState("");

  useEffect(() => {
    // API 요청
    const fetchData = async () => {
      try {
        const response = await API.get("/api/lanterns/cookie");
        setFortuneMessage(response.data.fortune);
      } catch (error) {
        console.error("포춘쿠키 내용 불러오기에 실패해버림:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <S.MainWrapper>
      <S.LotusLeaf>
        <S.FortuneContents>
          {fortuneMessage ? (
            <div>{fortuneMessage}</div>
          ) : (
            <div>
              오지 않은 미래를 걱정하는 것 보다 마주한 현재에 최선을 다하세요
            </div> //더미 텍스트
          )}
        </S.FortuneContents>
      </S.LotusLeaf>
      <Link to="/MyDetail">
        <S.ClosedㅈWrapper>
          <S.ClosedButton />
        </S.ClosedㅈWrapper>
      </Link>
    </S.MainWrapper>
  );
};

export default FortuneLotus;
