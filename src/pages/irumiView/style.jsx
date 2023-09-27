import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const IrumiViewWrapper = styled.div`
  flex-grow: 1;
  width: 100%;
  height: 100vh;
  /* max-width: 420px; */
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
  background-image: url("/background_detail.png");
  background-size: cover;
  background-position: center;
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
