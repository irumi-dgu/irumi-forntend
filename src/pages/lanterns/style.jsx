import { styled } from "styled-components";

export const LanternsWrapper = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
  align-items: center;
  background-image: url("background_write.png");
  background-size: 100% auto;
  flex-direction: column;
  background-size: cover;
  background-position: center;
  color: ${props => props.theme.colors.font};
  * {
    /* border: solid 1px white; */
  }
`;

export const LanternsList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  * {
    /* border: solid 1px white; */
  }
`;

export const LanternBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Lantern = styled.div`
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
