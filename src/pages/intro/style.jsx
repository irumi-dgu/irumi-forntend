import { styled } from "styled-components";

export const IntroWrapper = styled.div`
  position: fixed;

  width: 100%;
  max-width: 420px;
  height: 100vh;
  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
  }
  display: flex;

  align-items: center;
  background-image: url("background_intro.png");
  background-size: 100% auto;
  flex-direction: column;
  background-size: cover;
  /* background-position: center; */
  color: ${props => props.theme.colors.font};
  overflow: hidden;
`;

export const SubTitle = styled.div`
  display: flex;
  justify-content: center;
  height: 20px;
  font-size: 20px;
  margin-top: 100px;
  margin-bottom: 40px;
  color: white;
`;

export const MinTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 12px;
  color: white;
  margin: 10px;
  position: absolute;
  left: -60%;
`;

export const intro1 = styled.img`
  position: absolute;
`;
export const intro1_box = styled.div`
  height: 200px;
  width: 200px;
  position: relative;
`;
export const introBox = styled.div`
  width: 200px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  /* border: 1px solid white; */
`;

export const intro2_box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 110px;
  height: 183px;
  /* border: 1px solid red; */
`;

export const intro2_div = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  width: 100px;
  height: 160px;
  /* border: 1px solid white; */
  z-index: 2;
`;
export const intro2_img = styled.img`
  z-index: 1;
  position: absolute;
  top: -1%;
`;

export const intro_line = styled.img`
  transform: translate(-50%, 0);
  position: absolute;
  width: 17px;
  left: 35%;
`;

export const intro_hand = styled.img`
  transform: translate(-50%, 0);
  position: absolute;
  width: 30px;
  height: 30px;
  right: 10%;
  top: 90%;
`;
