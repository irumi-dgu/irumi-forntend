import { styled } from "styled-components";

export const IrumiWriteWrapper = styled.div`
  position: fixed;
  width: 100%;
  max-width: 420px;
  height: 100vh;
  flex-grow: 1;
  display: flex;
  align-items: center;
  background-image: url("background_write.png");
  background-size: 100% auto;
  flex-direction: column;
  background-size: cover;
  background-position: center;
  color: ${props => props.theme.colors.font};
`;

export const backStyledImage = styled.img`
  border: none;
  display: flex;
  cursor: pointer;
  margin-top: 10%;
  align-self: flex-start;
  margin-left: 10%;
`;

export const wishBgImg = styled.img`
  width: 65%;
  margin-top: 10%;
`;

export const wishContent = styled.div`
  justify-content: center;
  display: flex;

  position: relative;
`;

export const WriteName = styled.div`
  z-index: 999;
`;

export const Textarea = styled.div`
  position: absolute;
  top: 260px;
  width: 180px;
  display: flex;
  flex-direction: column;
  font-size: 16px;
`;

export const TextareaName = styled.div`
  color: black;
  font-size: 0.3rem;
`;

export const NameInput = styled.input`
  border: 1px solid #898989;
  margin-top: 7px;
  background-color: whitesmoke;
  border-radius: 5px;
  height: 24px;
  padding: 7px;

  &::placeholder {
    font-size: 5px;
  }
`;

export const TextareaContent = styled.div`
  color: black;
  font-size: 0.3rem;
  margin-top: 13px;
`;

export const ContentInput = styled.textarea`
  border: 1px solid #898989;
  margin-top: 7px;
  background-color: whitesmoke;
  border-radius: 5px;
  height: 190px;
  padding: 7px;
  width: 100%;
  justify-content: center;
  display: flex;
  font-family: "DonggukFont";

  &::placeholder {
    font-size: 10px; /* placeholder 텍스트 크기 설정 */
  }

  &:focus {
    border-color: #898989;
  }
`;
