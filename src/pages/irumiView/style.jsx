import { styled } from "styled-components";

export const IrumiViewWrapper = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${props => props.theme.colors.font};
  background-image: url("/background_detail.png");
  background-size: cover;
  background-position: center;
`;

export const BackBtnBox = styled.div`
  width: 100%;
  padding-left: 23px;
  margin-top: 31px;
  margin-bottom: 3px;
  display: flex;
`