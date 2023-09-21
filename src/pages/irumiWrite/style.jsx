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
  overflow: auto;
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
  width: 115%;
  margin-top: 10%;
`;

export const wishContent = styled.div`
  /* justify-content: center; */
  display: flex;

  transform: translate(-50%, 25%);
  position: absolute;
  justify-content: center;
  left: 50%;
`;

export const WriteName = styled.div`
  z-index: 999;
`;

export const Textarea = styled.div`
  position: absolute;
  top: 45%;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  height: 330px;
`;

export const TextareaName = styled.div`
  color: black;
  font-size: 12px;
`;

export const NameInput = styled.input`
  border: 1px solid #898989;
  margin-top: 7px;
  background-color: whitesmoke;
  border-radius: 5px;
  height: 24px;
  padding: 7px;
  font-family: "DonggukFont";

  &::placeholder {
    font-size: 5px;
  }
`;

export const TextareaContent = styled.div`
  color: black;
  font-size: 12px;
  margin-top: 13px;
`;

export const ContentInput = styled.textarea`
  border: 1px solid #898989;
  margin-top: 7px;
  background-color: whitesmoke;
  border-radius: 5px;
  height: 50%;
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

//비밀번호

export const WritePw = styled.div`
  position: absolute;
  width: 100%;
  height: 10%;
  transform: translate(0%, 770%);
  display: flex;
  align-items: center;
`;

export const WritePwLetter = styled.div`
  text-align: left;
  font-size: 12px;
  color: black;
  width: 75px;
`;

export const PasswordInput = styled.input`
  border: 1px solid black;
  background-color: whitesmoke;
  border-radius: 7px;
  width: 90%;
  height: 30px;
  margin-left: 5px;
  padding: 5px 6px;
  font-family: "DonggukFont";

  /* font-size: 40px; */

  &::placeholder {
    font-size: xx-small;
  }
`;

export const ShowPasswordIcon = styled.div`
  margin-left: 7px;
  font-size: 5px;

  img {
    width: 130%;
  }
`;
