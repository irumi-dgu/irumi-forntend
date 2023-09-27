import { styled } from "styled-components";

export const LanternsWrapper = styled.div`
  flex-grow: 1;
  width: 100%;

  display: flex;
  align-items: center;

  flex-direction: column;
  background-image: url("/background_lanterns.png");

  background-size: 100% auto;

  background-position: center;
  background-repeat: repeat;
  color: ${props => props.theme.colors.font};
  z-index: 2;
  height: auto;
  max-width: 420px;
  border: 1px solid red;
  position: relative;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  height: 38px;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  margin: 20px 0px;
`;

export const Selector = styled.div`
  display: flex;
  width: 130px;
  justify-content: space-between;
  margin: 20px;
`;

export const SubTitle = styled.div`
  margin: 20px;
  color: white;
`;

export const SelectorMenu = styled.div`
  font-size: 20px;
  color: ${props => (props.$isActive ? "white" : "#898989")};
`;

export const LanternsList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 30px;
  padding-bottom: 100px;
`;

export const LanternBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
