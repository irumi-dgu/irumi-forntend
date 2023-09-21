import { styled } from "styled-components";

export const MainWrapper = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
  align-items: center;
  background-image: url("background_write.png");
  background-size: 100% auto;
  flex-direction: column;
  background-size: cover;
  background-position: center;
  color: ${props => props.theme.colors.font};
`;

export const BtnWrapper = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;
`;
export const MainTitle = styled.div`
  display: flex;
  justify-content: center;

  margin: 10rem;
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
`;

export const Swiper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: scroll;
`;
export const SwiperSlide = styled.div`
  width: 150px;
  height: 200px;
  border: solid 1px white;
  margin: 0px;
  flex-shrink: 0;
`;

export const SwiperSlideActive = styled.div`
  border: solid 1px white;
  margin: 20px;
  flex-shrink: 0;
`;
