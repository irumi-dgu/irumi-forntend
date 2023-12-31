import { styled } from "styled-components";

export const aboutWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 420px;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("/background_lanterns.png");

  background-size: 100% auto;

  background-position: center;
  background-repeat: repeat;
  color: ${props => props.theme.colors.font};

  background-position: left top, left bottom, left bottom, left top;
`;
export const aboutBg = styled.img`
  width: 80%;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const aboutIntro = styled.div`
  position: absolute;
  width: 70%;
  align-items: initial;
  justify-content: initial;
  display: flex;
  font-size: 12px;
  color: #57381a;
  line-height: 15px;
  text-align: center;
`;

export const CloseBtn = styled.div`
  position: absolute;
  width: 200px;
  font-family: "DonggukFont";
  color: white;
  font-size: 14px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Close = styled.div`
  position: absolute;
  /* transform: translateX(-70%); */
  margin-top: 240%;
  height: 35px;
  border-radius: 20px;
  background-color: #f0939e;
  justify-content: center;
  display: flex;
  width: 200px;
  cursor: pointer;
`;
