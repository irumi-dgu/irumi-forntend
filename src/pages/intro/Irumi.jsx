import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";
import Draggable from "react-draggable";

import "../../assets/animation/animation.css";
import { Link } from "react-router-dom";
function Intro() {
  const [isDragMode, setIsDragMode] = useState(true);
  const [position, setPosition] = useState({ x: 0, y: 0 }); // box의 포지션 값
  // 업데이트 되는 값을 set 해줌
  const trackPos = data => {
    setPosition({ x: data.x, y: data.y });
  };

  useEffect(() => {
    if (
      position.x < 20 &&
      position.x > -20 &&
      position.y > -105 &&
      position.y < -85
    ) {
      setIsDragMode(false);
    }
  }, [position]);
  return (
    <S.IntroWrapper>
      {isDragMode ? (
        <>
          <S.SubTitle className="shine">연등에 소원을 달아보세요</S.SubTitle>
          <S.intro1_box>
            <S.intro1 src={"intro_before_lantern.svg"} />
          </S.intro1_box>

          <S.introBox>
            <S.intro_line src={"intro_line.svg"} />
            <S.intro_hand className="handMove" src={"icon_hand.png"} />
          </S.introBox>

          <Draggable onDrag={(e, data) => trackPos(data)}>
            <S.intro2_box>
              <S.intro2_div />
              <S.intro2_img src={"intro_before_paper.svg"} />
            </S.intro2_box>
          </Draggable>
        </>
      ) : (
        <>
          <S.Modal className="popupModal">
            <S.ModalInner>
              <S.ModalText>
                <S.ModalBigTitleBox>
                  <S.ModalBigTitle color="#744A21">
                    동국대학교 가을 온라인 연등제
                  </S.ModalBigTitle>
                  <S.ModalBigTitle color="#744A21">
                    ‘이루미’에 오신 것을 환영합니다!
                  </S.ModalBigTitle>
                </S.ModalBigTitleBox>
                <S.ModalMinTitle color="#898989">
                  아래 이용사항을 읽어보신 후 서비스를 이용해주세요!
                </S.ModalMinTitle>
                <S.ModalTitle style={{ marginBottom: "30px" }} color="#C9542F">
                  연등 작성 내용의 모든 책임은 작성자에게 있으며 이루미는 어떠한
                  책임도 입장도 가지고 있지 않습니다.
                </S.ModalTitle>

                <S.ModalTitle color="#744A21">
                  서비스 주의사항 안내
                </S.ModalTitle>
                <S.ModalContentBox>
                  <S.ModalContent color="#744A21">
                    (1) 닉네임, 비밀번호 기입이 필수입니다. 욕설 및 부적절한
                    단어를 사용했을 시 등록이 제한됩니다.
                  </S.ModalContent>
                  <S.ModalContent color="#744A21">
                    (2) 신고 접수된 연등은 운영자의 검토 후 삭제될 수 있습니다.
                  </S.ModalContent>
                  <S.ModalContent color="#744A21">
                    (3) 이 서비스는 베타 서비스이며, 10월에 종료될 예정입니다.
                  </S.ModalContent>
                </S.ModalContentBox>

                <S.ModalTitle color="#744A21">내용 기입 금지 항목</S.ModalTitle>

                <S.ModalContentBox>
                  <S.ModalContent color="#744A21">
                    (1) 욕설, 비하, 차별, 혐오, 자살, 폭력 관련 내용을 포함한
                    내용
                  </S.ModalContent>
                  <S.ModalContent color="#744A21">
                    (2) 음란물, 성적 수치심을 유발하는 내용
                  </S.ModalContent>
                  <S.ModalContent color="#744A21">
                    (3) 타인의 권리를 침해하거나 불쾌감을 주는 내용
                  </S.ModalContent>
                  <S.ModalContent color="#744A21">
                    (4) 홍보 및 판매 관련 행위의 내용
                  </S.ModalContent>
                </S.ModalContentBox>
              </S.ModalText>
              <Link to="/">
                <S.ModalBtn>이루미 시작하기</S.ModalBtn>
              </Link>
            </S.ModalInner>
          </S.Modal>

          <S.SubTitle className="fadein">
            이루미에 오신것을 환영합니다
          </S.SubTitle>
          <S.intro1_box>
            <S.intro1 className="fadein" src={"intro_after_lantern.svg"} />
            <S.intro1 src={"intro_before_lantern.svg"} />
          </S.intro1_box>

          <S.intro2_box>
            <S.intro2_img
              className="fadein"
              src={"intro_after_paper_write.svg"}
              style={{ zIndex: "4" }}
            />
            <S.intro2_img src={"intro_after_paper.svg"} />
          </S.intro2_box>
        </>
      )}
    </S.IntroWrapper>
  );
}

export default Intro;
