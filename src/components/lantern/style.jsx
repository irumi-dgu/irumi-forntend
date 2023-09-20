import { styled } from "styled-components";

export const LanternWrapper = styled.div`
  width: 180px;
  position: relative;
  color: #5b3a1a;
  img {
    width: 100%;
  }
`;

export const TitleSec = styled.div`
  transform: translate(-50%, 0);
  position: absolute;
  font-size: 12px;

  width: 95px;
  top: 235px;
  left: 90px;
`;
export const ContentSec = styled.div`
  transform: translate(-50%, 0);
  position: absolute;
  font-size: 10px;
  line-height: 130%;
  width: 95px;
  top: 260px;
  left: 90px;
`;

export const LikeBtn = styled.div`
  position: absolute;
  bottom: 15px;
  right: 45px;
  display: flex;
  align-items: center;

  img {
    width: 10px;
    height: 10px;
    margin-right: 5px;
  }
  p {
    font-size: 10px;
  }
`;
