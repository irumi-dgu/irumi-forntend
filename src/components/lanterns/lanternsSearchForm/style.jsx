import { styled } from "styled-components";
export const Search = styled.form`
  flex-grow: 1;
  /* border: solid 1px white; */
  border-radius: 19px;
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  background-color: #fbedd0b2;

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
