import React from 'react';
import * as S from "./style";

function MoreModal({closeModal}) {
  return (
    <>
        <S.MoreModalWrapper>
            <S.MoreBtnBox>
                <S.MoreTitle>더보기</S.MoreTitle>
                <S.DeleteBtn>삭제</S.DeleteBtn>
                <S.ReportBtn>신고</S.ReportBtn>
            </S.MoreBtnBox>
            <S.XBtn onClick={closeModal}>닫기</S.XBtn>
        </S.MoreModalWrapper>
    </>
  )
}

export default MoreModal