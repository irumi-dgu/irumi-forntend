import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const IrumiWriteWrapper = styled.div`
  /* position: fixed; */
  position: relative;
  width: 100%;
  max-width: 420px;
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
  max-width: 100%;
  width: auto;

  @media (max-width: 860px) and (max-height: 1180px) {
    max-width: 120%;
  }
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
  top: 42%;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  height: 330px;
  padding: 10px;

  @media (max-width: 860px) and (max-height: 1180px) {
    width: 120%;
    height: 460px;
  }

  @media (max-width: 320px) and (max-height: 568px) {
    width: 100%;
    padding: initial;
    height: 270px;
  }

  @media (max-width: 360px) and (max-height: 740px) {
    width: 120%;
    height: 400px;
  }
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
  height: 45%;
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
  position: relative;
  width: 100%;
  height: 10%;
  transform: translate(0%, 30%);
  display: flex;
  align-items: center;

  //iphone XR사이즈
  @media (max-width: 414px) and (max-height: 896px) {
    transform: translate(10%, 30%);
  }

  //ipad mini
  @media (max-width: 820px) and (max-height: 1180px) {
    transform: translate(10%, 30%);
  }

  @media (max-width: 393px) and (max-height: 851px) {
    transform: translate(7%, 13%);
  }

  //iphone 12 Pro
  @media (max-width: 390px) and (max-height: 844px) {
    transform: translate(5%, 10%);
  }
`;

export const WritePwLetter = styled.div`
  text-align: left;
  font-size: 10px;
  color: black;
  width: 44px;
`;

export const PasswordInput = styled.input`
  border: 1px solid #898989;
  outline: none;
  background-color: #f1f1f1;
  border-radius: 7px;
  width: 115px;
  /* height: 30px; */
  height: 60%;
  padding: 5px 6px;
  font-family: "DonggukFont";

  /* font-size: 40px; */

  &::placeholder {
    font-size: 10px;
  }

  @media (max-width: 390px) and (max-height: 844px),
    (max-width: 412px) and (max-height: 915px) {
    width: 125px;
  }
`;

export const ShowPasswordIcon = styled.div`
  margin-left: 7px;
  font-size: 5px;
  cursor: pointer;

  img {
    width: 80%;
  }
`;

export const Submit = styled.div`
  position: relative;
  /* transform: translateX(-70%); */
  margin-top: 144%;
  margin-bottom: 5%;
  height: 35px;
  border-radius: 20px;
  background-color: #f0939e;
  justify-content: center;
  display: flex;

  @media (max-width: 860px) and (max-height: 1180px) {
    margin-top: 174%;
  }
`;

export const SubmitBtn = styled.button`
  /* height: 35px; */
  width: 200px;
  font-family: "DonggukFont";
  color: white;
  font-size: 12px;
  height: 35px;
`;
