import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  height: 38px;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  margin: 20px 0px;
`;

export const IrumiWriteWrapper = styled.div`
  position: fixed;

  width: 100%;
  max-width: 420px;
  height: 100vh;
  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
  }

  display: flex;
  flex-direction: column;

  justify-content: start;
  align-items: center;
  background-image: url("background_write.png");
  background-size: 100% auto;

  background-size: cover;
  background-position: center;
  color: ${props => props.theme.colors.font};
  overflow: hidden;
`;

export const BackBtnBox = styled.div`
  width: 100%;
  max-width: 420px;
  height: 38px;
  margin-top: 20px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  padding: 0px 20px;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
`;

export const LanternChoiceSection = styled.div`
  width: 100%;
  border: none;
  flex-direction: row;
  display: flex;
  align-items: center;
  border: none;
  justify-content: center;
`;

export const wishBgImg = styled.img`
  max-width: 220px !important;
  height: 100%;
`;

export const wishContent = styled.div`
  max-width: 220px !important;
  display: flex;
  height: 85%;
  justify-content: center;
  position: relative;
`;

export const Textarea = styled.div`
  position: absolute;

  display: flex;
  flex-direction: column;
  font-size: 16px;

  width: 90%;
  max-width: 189px;
  height: 50%;

  top: 45%;
`;

export const TextareaName = styled.div`
  color: black;
  font-size: 12px;
  margin-bottom: 3%;
  padding-left: 5px;
`;

export const NameInput = styled.input`
  width: 100%;
  border: 1px solid #898989;
  outline: none;

  background-color: #f1f1f1;
  border-radius: 5px;

  font-family: "DonggukFont";
  font-size: 10px;
  &::placeholder {
    font-size: 10px;
  }
  padding: 5px 10px;
`;

export const TextareaContent = styled.div`
  color: black;
  font-size: 12px;
  margin-top: 13px;
  padding-left: 5px;
`;

export const ContentInput = styled.textarea`
  border: 1px solid #898989;
  outline: none;
  margin-top: 7px;
  background-color: #f1f1f1;
  border-radius: 5px;
  height: 50%;

  width: 100%;

  justify-content: center;
  display: flex;
  font-family: "DonggukFont";
  padding: 5px 10px;

  font-size: 10px;
  &::placeholder {
    font-size: 10px; /* placeholder 텍스트 크기 설정 */
  }

  &:focus {
    /* border-color: #898989; */
  }
`;

//비밀번호

export const WritePw = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 5px;
`;

export const WritePwLetter = styled.div`
  text-align: left;
  font-size: 12px;
  color: black;
  flex-shrink: 0;
  margin-right: 5px;
`;

export const PasswordInput = styled.input`
  min-width: 48px;
  flex-grow: 1;
  border: 1px solid #898989;
  outline: none;
  background-color: #f1f1f1;
  border-radius: 7px;

  padding: 5px 10px;
  font-family: "DonggukFont";

  &::placeholder {
    font-size: 10px;
  }
`;

export const ShowPasswordIcon = styled.div`
  width: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin-left: 7px;
  font-size: 5px;
  cursor: pointer;

  img {
    width: 80%;
  }
`;

export const Submit = styled.div`
  position: absolute;

  height: 35px;
  border-radius: 20px;
  background-color: ${props => (props.active ? "#f0939e" : "#AEAEAE")};
  justify-content: center;
  display: flex;
  bottom: 4%;
`;

export const SubmitBtn = styled.button`
  position: absolute;
  bottom: 2%;
  width: 90%;

  font-family: "DonggukFont";
  color: white;
  background-color: ${props => (props.active ? "#f0939e" : "#AEAEAE")};
  border-radius: 20px;
  font-size: 14px;
  padding: 7px 0px;
`;
