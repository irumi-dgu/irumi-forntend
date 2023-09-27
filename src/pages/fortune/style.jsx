import { styled } from "styled-components";

export const MainWrapper = styled.div`
  position: fixed;

  width: 100%;
  max-width: 420px;
  height: 100vh;
  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
  }
  display: flex;

  align-items: center;
  background-image: url("/background_main.png");
  background-size: 100% auto;
  flex-direction: column;
  background-size: cover;

  overflow: hidden;
`;

export const LotusWhole = styled.div`
  /* flex-grow: 1;
  display: flex;
  background-image: url(/lotus.png);
  position: absolute;
  width: 350px;
  height: 100%;
  justify-content: center;
  align-items: center;
  /* background-size: contain; */
  /* background-repeat: no-repeat;
  background-position: center;
  border: 3px solid red;  */

  display: flex;
  background-image: url(/lotus.png);
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  width: 100%;
  max-width: 390px;
  display: flex;
  height: 100%;
  bottom: 45px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 3px solid red; */
`;

export const LotusLight = styled.div`
  flex-grow: 1;
  z-index: 20;
  background-image: url(/lightlotus.png);
  position: relative;
  top: 38%;
  width: 110000px;
  height: 300px;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
`;

// export const LotusLight2 = styled.div`
//     flex-grow: 1;
//     z-index: 20;
//     background-image: url(/lightlotus.png);
//     position: relative;
//     top: 38%;
//     width: 110000px;
//     height: 300px;
//     justify-content: center;
//     background-position: center;
//     background-repeat: no-repeat;
// `;

export const LotusTop = styled.div`
  flex-grow: 1;
  z-index: 10;
  background-image: url(/lotus2.png);
  position: relative;
  top: 161px;
  width: 332px;
  height: 195px;
  opacity: 0;
  justify-content: center;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const FortuneTitle = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  font-size: 20px;
  top: 220px;
  color: #ffffff;
`;

//포춘 연꽃잎
export const LotusLeaf = styled.div`
  flex-grow: 1;
  display: flex;
  background-image: url(/leaf.png);

  /* position: fixed; */
  position: relative;

  /* width: 260px; */
  width: 65%;

  /* height: 559px; */
  height: auto;

  top: -5%;
  margin: 5rem;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  justify-content: center;
  align-items: center;

  /* width: 90%;
    height: auto;

    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */

  /* border: 1px solid yellow; */
`;

//포춘쿠키 내용
export const FortuneContents = styled.div`
  display: flex;
  position: fixed;
  writing-mode: vertical-lr;
  text-orientation: mixed;
  flex-wrap: wrap;
  word-wrap: break-word;
  word-break: keep-all;
  white-space: normal;
  color: #5f3a16;
  font-size: 19px;
  text-align: center;
  line-height: 100%;
  /* padding: 68px 30px; */
  width: 170px;
  height: 54%;
  justify-content: center;
  align-items: center;
  line-height: 1.5;
  /* border: 3px solid red; */
`;

//닫기 버튼 -> 요거 누르면 MyDetail로 감
export const ClosedWrapper = styled.div`
  position: absolute;
  transform: translate(-50%, 0);
  bottom: 0;
  left: 50%;
  width: 100%;
  margin-bottom: 10%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ClosedButton = styled.div`
  display: flex;
  background-image: url(/closedbutton.png);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 46px;
  height: 46px;
  top: 1350%;
  position: relative;
  /* border: 3px solid yellow; */
`;

export const IrumiViewWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
  background-image: url("/background_detail.png");
  background-size: cover;
  background-position: center;
  margin-bottom: 20px;
`;

export const DetailLanternWrapper = styled.div`
  width: 84%;
  height: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: -15px;
  /* margin-top: 15px; */
  /* margin-bottom: 30px; */
`;

export const DetailLanternImg = styled.img`
  /* width: 344px; */
  /* height: 735.32px; */

  /* max-width: 82%; */
  width: 82%;
  height: auto;
`;

export const TitleSec = styled.div`
  position: absolute;
  top: 60%;
  width: 44%;
  /* padding: 0 63.26px; */
  color: #5b3a1a;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContentSec = styled(TitleSec)`
  top: 65%;
  font-size: 14px;
  /* padding: 0 98px; */
  line-height: 130%;
`;

export const MyBtnsBoxPosition = styled.div`
  width: 300px;
  height: 65px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const MyBtnsBox = styled(MyBtnsBoxPosition)`
  position: fixed;
  bottom: 3%;
`;
export const MyBtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 46px;
    height: 46px;
    margin-bottom: 6px;
  }
  p {
    color: #fafbfd;
    font-size: 12px;
    font-weight: 400;
    margin-top: 5px;
  }
`;
