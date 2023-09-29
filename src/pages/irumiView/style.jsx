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
