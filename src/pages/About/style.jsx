import { styled } from "styled-components";

export const aboutWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 420px;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(transparent, transparent),
    url("about_moon2.png"), linear-gradient(transparent, transparent),
    url("about_moon.png");
  background-size: auto, 100% auto, auto, 100% auto;
  background-repeat: no-repeat;
  background-position: left top, left bottom, left bottom, left top;
`;
export const aboutBg = styled.img`
  width: 80%;
  margin-top: 100px;
  margin-bottom: 250px;
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
