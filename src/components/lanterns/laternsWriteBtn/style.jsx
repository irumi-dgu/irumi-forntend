import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const WriteBtnLink = styled(Link)`
  z-index: 20;;
`;
export const WriteBtn = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: #f0939e;
  position: fixed;
  transform: translate(-50%, 0%);
  left: calc(50% + 160px);
  bottom: 20px;

  img {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
  }
`;
