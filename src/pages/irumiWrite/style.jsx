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
  width: 100%;
  max-width: 420px;

  @media (max-height: 500px) {
    height: 550px;
    padding-bottom: 50px;
  }
  @media (min-height: 500px) {
    position: fixed;
    height: 100vh;
    @supports (-webkit-touch-callout: none) {
      height: -webkit-fill-available;
    }
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

export const LanternChoiceSection = styled.div`
  width: 100%;
  border: none;
  flex-direction: row;
  display: flex;
  align-items: center;
  border: none;
  justify-content: center;
`;

//연등

export const wishContent = styled.div`
  height: 87%;
  max-height: 620px;
  position: relative;
`;

export const wishBgImg = styled.img`
  height: 100%;
`;

export const TextareaName = styled.div`
  position: absolute;
  transform: translate(-50%, 0);
  top: 45%;
  left: 50%;
  width: 85%;
  color: #5b3a1a;
  font-size: 12px;
`;

export const NameInput = styled.input`
  position: absolute;
  transform: translate(-50%, 0);

  top: 48%;
  left: 50%;
  width: 85%;
  color: #5b3a1a;
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
  position: absolute;
  transform: translate(-50%, 0);
  top: 54%;
  left: 50%;
  width: 85%;
  color: #5b3a1a;
  font-size: 12px;
`;

export const ContentInput = styled.textarea`
  position: absolute;
  transform: translate(-50%, 0);
  top: 57%;
  left: 50%;
  width: 85%;
  height: 22%;
  color: #5b3a1a;
  border: 1px solid #898989;
  outline: none;
  background-color: #f1f1f1;
  border-radius: 5px;
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
  position: absolute;
  transform: translate(-50%, 0);
  top: 74%;
  left: 50%;
  width: 85%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #5b3a1a;
`;

export const WritePwLetter = styled.div`
  text-align: left;
  font-size: 12px;
  color: #5b3a1a;
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
  color: #5b3a1a;
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

export const SubmitBtn = styled.button`
  position: absolute;
  transform: translate(-50%, 0);
  bottom: 2%;
  left: 50%;
  width: 90%;
  font-family: "DonggukFont";
  color: white;
  background-color: ${props => (props.active ? "#f0939e" : "#AEAEAE")};
  border-radius: 20px;
  font-size: 14px;
  padding: 7px 0px;
`;
