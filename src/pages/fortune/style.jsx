import { styled } from "styled-components";

//별만 있는 배경
export const StarWrapper = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url("/starbg.png");
  background-size: cover;
  background-position: center;
`;

//반짝이 배경 - 모션 추가 예정
export const SparkleWrapper = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url("/sparkle.png");
  background-size: cover;
  background-position: center;
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
  border: 3px solid red;
  background-image: url(/leaf.png);
  position: absolute;
  width: 30%;
  height: 63%;
  top: 35px;
  margin: 5rem;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  p {
    writing-mode: vertical-rl; /* 텍스트의 쓰기 모드를 세로로 (우에서 좌로) 설정 */
    text-orientation: mixed; /* 텍스트 방향 설정 */
    white-space: nowrap;
    color: #5f3a16;
    font-size: 16px;
    text-align: center; /* 텍스트를 수직으로 중앙에 정렬 */
    line-height: 100%; /* 텍스트의 라인 높이를 조절하여 중앙에 정렬 */
  }
`;

export const ClosedButton = styled.div`
  display: flex;
  background-image: url(/closedbutton.png);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 46px;
  height: 46px;
  top: 336px;
  position: relative;
  /* border: 3px solid yellow; */
`;
