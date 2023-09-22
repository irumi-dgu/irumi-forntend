// MoreModal.jsx

import React, { useState } from 'react';
import * as S from "./style";
import DeleteModal from './DeleteModal';

function MoreModal({ closeModal, openDeleteModal }) {

    return (
        <>
            <S.MoreModalWrapper>
                <S.MoreBtnBox>
                    <S.MoreTitle>더보기</S.MoreTitle>
                    <S.DeleteBtn onClick={openDeleteModal}>삭제</S.DeleteBtn>
                    <S.ReportBtn onClick={closeModal}>신고</S.ReportBtn>
                </S.MoreBtnBox>
                <S.XBtn onClick={closeModal}>닫기</S.XBtn>
            </S.MoreModalWrapper>
        </>
    )
}

export default MoreModal