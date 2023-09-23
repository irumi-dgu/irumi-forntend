import { styled, keyframes } from "styled-components";

const lightSpread = keyframes`
  0% {
    box-shadow: 0 0 0 0 #f2be5c;
  }
  100% {
    box-shadow: 0 0 50px 50px #f2be5c;
  }
`;

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
  &:hover::after {
    content: "";
    position: absolute;
    top: 400px;
    left: 50px;
    right: 50px;
    bottom: -20px;
    /* border: 1px solid yellow; */
    box-shadow: 0 0 0 0 #f2be5c;
    animation: ${lightSpread} 1.2s ease; /* lightSpread 애니메이션 적용 */
  }
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
  position: absolute;
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
  white-space: normal;
  color: #5f3a16;
  font-size: 16px;
  text-align: center;
  line-height: 100%;
  padding: 82px 30px;
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
  top: 336px;
  position: relative;
`;
