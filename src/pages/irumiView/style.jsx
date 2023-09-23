import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const IrumiViewWrapper = styled.div`
  flex-grow: 1;
  width: 100%;
  height: 100%;
  /* max-width: 420px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.font};
  background-image: url("/background_detail.png");
  background-size: cover;
  background-position: center;
`;

export const BackBtnBox = styled.div`
  width: 100%;
  max-width: 420px;
  height: 38px;
  margin-top: 20px;
  margin-bottom: 3px;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  padding: 0px 20px;
`;
