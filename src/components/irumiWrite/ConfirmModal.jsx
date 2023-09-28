import React from "react";
import * as S from "./style"; // 모달 스타일 파일을 불러옵니다.

function DeleteModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <S.ConfirmModalWrapper>
      <S.ConfirmBox>
        <S.Question>
          확인을 누르시면 연등이 달립니다! <br />
          달린 연등은 수정이 불가능해요.
        </S.Question>
        <S.SelectBox>
          <S.NoBtn onClick={onClose}>취소</S.NoBtn>
          <S.YesBtn onClick={onConfirm}>확인</S.YesBtn>
        </S.SelectBox>
      </S.ConfirmBox>
    </S.ConfirmModalWrapper>
  );
}

export default DeleteModal;
