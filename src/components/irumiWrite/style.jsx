import { styled } from "styled-components";

//lanternColorChioce의 스타일 컴포넌트

export const lanternWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  padding-top: 10px;
  padding-bottom: 20px;
  height: 30px;
`;
export const lantern = styled.div`
  position: absolute;
  transform: translate(50%, 50%);
  bottom: 50%;
  right: 50%;
  width: 100%;
  padding: 0 20%;
  height: 5%;
  border: none;
  display: flex;

  align-items: center;
  border: none;
  justify-content: space-between;
`;

export const lanternLetter = styled.div`
  font-size: 17px;
  border: none;
`;

//연꽃색 조그만한것

export const lanternColor = styled.div`
  border: none;
  justify-content: space-between;
`;

export const lanternImage = styled.img`
  width: 30px;
  border: none;
  cursor: pointer;
  margin: 0 10px;
`;

//wishForm 스타일 컴포넌트

export const WishForm = styled.div``;
export const wishContent = styled.div``;

export const wishBgImage = styled.div`
  z-index: 999;
`;
