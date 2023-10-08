import { styled } from "styled-components";
export const Search = styled.form`
  flex-grow: 1;
  /* border: solid 1px white; */
  border-radius: 19px;
  margin-left: 20px;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background-color: #fbedd0b2;
  flex-grow: 1;
  font-size: 16px;
  color: #5b3a1a;
  margin-right: 5px;
  font-family: "DonggukFont";
  width: 300px;

  @media (max-width: 320px) {
    margin-left: 10px;
    width: 70%;
  }

  input::placeholder {
    color: #745b45;
    font-size: 12px;
    font-weight: 400;
    font-family: "DonggukFont";
  }
`;

export const Input = styled.input`
  flex-grow: 1;
  font-size: 16px;
  color: #5b3a1a;
  margin-right: 5px;
  font-family: "DonggukFont";
`;

export const SearchIcon = styled.div`
  margin-left: 90px; /* 이미지와 입력 상자 사이에 간격을 조정하세요. */
`;
