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

//ConfirmModal

// ModalStyle.js

export const ConfirmModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ConfirmBox = styled.div`
  width: 282px;
  height: 110px;
  border-radius: 15px;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
`;

export const Question = styled.div`
  height: 64px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom: 0.5px solid #3d4353;
  color: #000;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  text-align: center;
  line-height: 24px;
`;

export const SelectBox = styled.div`
  height: 46px;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  display: flex;
  flex-direction: row;
`;

export const NoBtn = styled.div`
  border-radius: 0;
  border-bottom-left-radius: 15px;
  width: 141px;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  font-size: 16px;
  font-weight: 400;
  border-right: 0.5px solid #3d4353;
  border-left: 0;
  cursor: pointer;
`;

export const YesBtn = styled(NoBtn)`
  color: #007afe;
  border-radius: 0;
  border-bottom-right-radius: 15px;
  border-right: 0;
`;
