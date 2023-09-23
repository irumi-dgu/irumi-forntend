import { styled } from "styled-components";

//별만 있는 배경
export const StarWrapper = styled.div`
  /* flex-grow: 1;
  width: 100%;
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url("/starbg.png");
  background-size: cover;
  background-position: center; */

  position: fixed;
  width: 100%;
  max-width: 420px;
  height: 100vh;
  display: flex;
  align-items: center;
  background-image: url("/starbg.png");
  background-size: 100% auto;
  flex-direction: column;
  background-size: cover;
  color: #ffffff;
  overflow: hidden;
`;

//반짝이 배경 - 모션 추가 예정
export const SparkleWrapper = styled.div`
  /* flex-grow: 1;
  width: 100%;
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url("/sparkle.png");
  background-size: cover;
  background-position: center; */

  position: fixed;
  width: 100%;
  max-width: 420px;
  height: 100vh;
  display: flex;
  align-items: center;
  background-image: url("/sparkle.png");
  background-size: 100% auto;
  flex-direction: column;
  background-size: cover;
  color: #ffffff;
  overflow: hidden;
`;

export const LotusWhole = styled.div`
  flex-grow: 1;
  display: flex;
  background-image: url(/lotus.png);
  position: relative;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const LotusLight = styled.div`
  flex-grow: 1;
  z-index: 20;
  background-image: url(/lightlotus.png);
  position: relative;
  top: 125px;
  width: 110000px;
  height: 300px;
  justify-content: center;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const LotusTop = styled.div`
  flex-grow: 1;
  z-index: 10;
  background-image: url(/lotus2.png);
  position: relative;
  top: 161px;
  width: 332px;
  height: 195px;
  opacity: 0;
  justify-content: center;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const FortuneTitle = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  font-size: 20px;
  top: 220px;
  color: #ffffff;
`;

//포춘 연꽃잎
export const LotusLeaf = styled.div`
  flex-grow: 1;
  display: flex;
  background-image: url(/leaf.png);
  position: fixed;
  width: 70%;
  height: 63%;
  top: 35px;
  margin: 5rem;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  justify-content: center;
`;

//포춘쿠키 내용
export const FortuneContents = styled.p`
  display: flex;
  position: relative;
  writing-mode: vertical-lr;
  text-orientation: mixed;
  flex-wrap: wrap;
  word-wrap: break-word;
  word-break: keep-all;
  white-space: normal;
  color: #5f3a16;
  font-size: 16px;
  text-align: center;
  line-height: 100%;
  padding: 104px 30px;
  width: 100%;
  justify-content: center;
  align-items: center;
  line-height: 1.5;
`;

//닫기 버튼 -> 요거 누르면 MyDetail로 감
export const ClosedButton = styled.div`
  display: flex;
  background-image: url(/closedbutton.png);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 46px;
  height: 46px;
  top: 720px;
  position: relative;

  @media (max-height: 667px) {
    top: 570px; /* 세로 비율이 667 이하인 경우 top 값을 100px로 조절 */
  }

  /* 
  flex-grow: 1;
  display: flex;
  background-image: url(/leaf.png);
  position: fixed;
  width: 70%;
  height: 63%;
  top: 35px;
  margin: 5rem;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  justify-content: center; */
`;
