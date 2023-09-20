import { styled } from "styled-components";

export const LanternsWrapper = styled.div`
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

export const Header = styled.div`
  width: 100%;
  display: flex;
  height: 38px;
  justify-content: space-between;
  align-items: center;
  padding: 0px 40px;
  margin: 15px 0px;
`;

export const Search = styled.div`
  flex-grow: 1;
  border: solid 1px white;
  border-radius: 19px;
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  color: white;
`;

export const Input = styled.input`
  flex-grow: 1;
  font-size: 16px;

  margin-right: 5px;
`;
export const LanternsList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 30px;
`;

export const LanternBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
