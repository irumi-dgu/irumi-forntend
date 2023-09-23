import { styled } from "styled-components";
import { Link } from "react-router-dom";

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

export const BackBtnBox = styled(Link)`
  width: 100%;
  max-width: 420px;
  padding-left: 23px;
  margin-top: 31px;
  margin-bottom: 3px;
  display: flex;
  position: absolute;
  top: 0;
`;

export const wishBgImg = styled.img`
  width: 115%;
`;

export const wishContent = styled.div`
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
  outline: none;
  margin-top: 7px;
  background-color: #f1f1f1;
  border-radius: 5px;
  height: 24px;
  padding: 7px;
  font-family: "DonggukFont";

  &::placeholder {
    font-size: 10px;
  }
`;

export const TextareaContent = styled.div`
  color: black;
  font-size: 12px;
  margin-top: 13px;
`;

export const ContentInput = styled.textarea`
  border: 1px solid #898989;
  outline: none;
  margin-top: 7px;
  background-color: #f1f1f1;
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
    /* border-color: #898989; */
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
  border: 1px solid #898989;
  outline: none;
  background-color: #f1f1f1;
  border-radius: 7px;
  width: 90%;
  height: 30px;
  margin-left: 5px;
  padding: 5px 6px;
  font-family: "DonggukFont";

  /* font-size: 40px; */

  &::placeholder {
    font-size: 10px;
  }
`;

export const ShowPasswordIcon = styled.div`
  margin-left: 7px;
  font-size: 5px;
  cursor: pointer;

  img {
    width: 130%;
  }
`;

export const Submit = styled.div`
  position: relative;
  /* transform: translateX(-70%); */
  margin-top: 162%;
  margin-bottom: 10%;

  height: 40px;
  border-radius: 20px;
  background-color: #f0939e;
  justify-content: center;
  display: flex;
`;

export const SubmitBtn = styled.button`
  height: 40px;
  width: 200px;
  font-family: "DonggukFont";
  color: white;
  font-size: 12px;
`;
