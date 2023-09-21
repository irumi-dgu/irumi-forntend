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

  font-size: 16px;
  margin-top: 100px;
  margin-bottom: 40px;
  color: white;
`;

export const intro1 = styled.img``;

export const intro2 = styled.img`
  position: absolute;
  transform: translate(-50%, 0);
  left: 50%;
  top: 72%;
`;

export const intro_line = styled.img`
  transform: translate(-50%, 0);
  position: absolute;
  width: 20px;
  left: 40%;
  top: 55%;
`;
