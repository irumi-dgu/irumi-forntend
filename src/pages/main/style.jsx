import { styled } from "styled-components";

export const MainWrapper = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: url("background_write.png");
  background-size: 100% auto;
  flex-direction: column;
  background-size: cover;
  background-position: center;
  color: ${props => props.theme.colors.font};
`;

export const MainTitle = styled.div`
  display: flex;
  justify-content: center;

  font-size: 18px;
  margin-top: 60px;
  margin-bottom: 20px;
`;

export const SubTitle = styled.div`
  display: flex;
  justify-content: center;

  font-size: 16px;
`;
export const BtnWrapper = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;
`;

export const MainSection = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;
`;

export const MenuBtn = styled.div`
  font-size: 16px;
  padding: 10px 20px;
  background-color: #f0939e;
  border-radius: 50px;

  margin-bottom: 60px;
`;

export const Swiper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 492px;
  margin-top: 30px;
  margin-bottom: 60px;
  position: relative;
`;
export const SwiperSlidePrev = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: ${props => props.left}%;
`;

export const SwiperSlideActive = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  flex-shrink: 0;
`;
