import { styled } from "styled-components";

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
  background-image: url("/lotus.png");
  width: 100%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const LotusTop = styled.div`
  flex-grow: 1;
  z-index: 10;
  background-image: url(/lotus2.png);
  position: relative;
  top: 456px;
  height: 195px;
  opacity: 0;
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

//포춘 연꽃잎 - 부모요소 때문에 크기 지정이 안되는듯 오늘 수정할게요
export const LotusLeaf = styled.div`
  flex-grow: 1;
  border: 3px solid red;
  background-image: url(/leaf.png);
  position: relative;
  width: 67%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;
