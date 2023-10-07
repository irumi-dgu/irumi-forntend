import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
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
  top: 186px;
`;

export const FixText = styled.div`
  font-size: 22px;
  font-weight: 800;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: center;
  color: #ffff;
`;
