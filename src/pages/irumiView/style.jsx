import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Header = styled.div`
  position: fixed;
  width: 100%;
  max-width: 420px;
  display: flex;
  height: 38px;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  margin: 20px 0px;
`;

export const IrumiViewWrapper = styled.div`
  position: fixed;

  width: 100%;
  max-width: 420px;
  height: 100vh;
  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
  }

  display: flex;
  flex-direction: column;

  justify-content: start;
  align-items: center;
  background-image: url("/background_main.png");
  background-size: 100% auto;

  background-size: cover;
  background-position: center;
  color: ${props => props.theme.colors.font};
  overflow: hidden;
`;

export const BackBtnBox = styled.div`
  width: 100%;
  max-width: 420px;
  height: 38px;
  margin-top: 20px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;

  padding: 0px 20px;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
`;

export const MainWrapper = styled.div`
  position: fixed;
  width: 100%;
  max-width: 420px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("/background_detail.png");
  background-size: 100% auto;
  flex-direction: column;
  background-size: cover;
  overflow: hidden;
`;

export const FixTitle = styled.div`
  display: flex;
  justify-content: center;
  font-family: DONGGUK UNIVERSITY;
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: center;
  color: #ffff;
  margin-bottom: 100%;
`;

export const FixImg = styled.div`
  position: fixed;
  width: 250px;
  height: 282px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(/fixing.png);
  background-position: center;
  flex-direction: column;
  background-size: cover;
  overflow: hidden;
  /* border: 3px solid red; */
`;

export const TextWrapper = styled.div`
  display: flex;
  height: 80vh;
  justify-content: center;
  align-items: center;
`;

export const FixText = styled.div`
  font-family: DONGGUK UNIVERSITY;
  font-size: 22px;
  font-weight: 800;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: center;
  color: #ffff;
`;
