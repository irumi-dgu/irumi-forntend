import { styled } from "styled-components";

export const MainWrapper = styled.div`
  position: fixed;

  width: 100%;
  max-width: 420px;
  height: 100vh;
  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
  }
  display: flex;

  align-items: center;
  background-image: url("/background_main.png");
  background-size: 100% auto;
  flex-direction: column;
  background-size: cover;
  /* background-position: center; */
  color: ${props => props.theme.colors.font};
  overflow: hidden;
`;

export const MainTitle = styled.div`
  display: flex;
  justify-content: center;

  font-size: 18px;
  margin-top: 50px;
  margin-bottom: 30px;
`;

export const SubTitle = styled.div`
  display: flex;
  justify-content: center;

  font-size: 16px;
  color: #fcd300;
`;

export const Swiper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 400px;
  margin: 20px 0px;

  position: relative;
  overflow: hidden;
`;

export const SwiperSlide = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 55%;
  left: ${props => props.left}%;
`;

export const SwiperSlideActive = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  flex-shrink: 0;
  z-index: 5;
`;

export const Btns = styled.div`
  position: absolute;
  transform: translate(-50%, 0);
  bottom: 20px;
  left: 50%;
  width: 100%;
  max-width: 300px;

  display: flex;
  flex-direction: column;
`;
export const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const MenuBtn = styled.div`
  font-size: 16px;
  padding: 10px 20px;
  background-color: #f0939e;
  border-radius: 50px;
`;

export const MinTitle = styled.div`
  display: flex;
  justify-content: center;

  font-size: 12px;
  color: #898989;
`;
