import { styled } from "styled-components";

export const LanternWrapper = styled.div`
  width: ${props => props.size}px;
  position: relative;
  color: #5b3a1a;

  img {
    width: 100%;
  }
`;

export const TitleSec = styled.div`
  transform: translate(-50%, 0);
  position: absolute;
  font-size: ${props => props.fontSize}px;

  width: 52%;
  top: 61%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContentSec = styled.div`
  transform: translate(-50%, 0);
  position: absolute;

  font-size: ${props => props.fontSize}px;
  line-height: 130%;
  width: 52%;
  top: 67%;
  left: 50%;
`;

export const LikeBtn = styled.div`
  position: absolute;
  bottom: 5%;
  right: 25%;
  display: flex;
  align-items: center;

  img {
    width: ${props => props.fontSize}px;
    height: ${props => props.fontSize}px;
    margin-right: 5px;
  }
  p {
    font-size: ${props => props.fontSize}px;
  }
`;
