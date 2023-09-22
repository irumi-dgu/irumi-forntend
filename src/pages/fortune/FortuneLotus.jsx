import React, { useState, useEffect } from "react";
import * as S from "./style";
import { Link } from "react-router-dom";

const FortuneLotus = () => {
  const [fortuneMessage, setFortuneMessage] = useState(""); // 데이터를 저장할 상태 변수

  useEffect(() => {
    // API 요청을 보내고 데이터를 가져오는 함수
    const fetchData = async () => {
      try {
        const response = await fetch("/api/lanterns/cookie");
        if (!response.ok) {
          throw new Error("API 요청이 실패했습니다.");
        }
        const data = await response.json();
        setFortuneMessage(data.message);
      } catch (error) {
        console.error("API 오류:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <S.StarWrapper>
      <S.SparkleWrapper>
        <S.LotusLeaf>
          <S.FortuneContents>
            {fortuneMessage ? (
              <p>{fortuneMessage}</p>
            ) : (
              <p>
                오지 않은 미래를 걱정하는 것 보다 마주한 현재에 최선을 다하세요
              </p> //더미 텍스트
            )}
          </S.FortuneContents>
        </S.LotusLeaf>
        <Link to="/MyDetail">
          <S.ClosedButton />
        </Link>
      </S.SparkleWrapper>
    </S.StarWrapper>
  );
};

export default FortuneLotus;
