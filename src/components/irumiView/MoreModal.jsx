// MoreModal.jsx

import React, { useState } from 'react';
import * as S from "./style";
import DeleteModal from './DeleteModal';

function MoreModal({ closeModal, openDeleteModal }) {
    // // 삭제 버튼 클릭 시
    // const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    // const openDeleteModal = () => {
    //     setDeleteModalOpen(true);
    //     // closeModal();
    // };
    // const closeDeleteModal = () => {
    //     setDeleteModalOpen(false);
    // };

    return (
        <>
            <S.MoreModalWrapper>
                <S.MoreBtnBox>
                    <S.MoreTitle>더보기</S.MoreTitle>
                    <S.DeleteBtn onClick={() => {openDeleteModal(); closeModal();}}>삭제</S.DeleteBtn>
                    <S.ReportBtn onClick={closeModal}>신고</S.ReportBtn>
                </S.MoreBtnBox>
                <S.XBtn onClick={closeModal}>닫기</S.XBtn>
            </S.MoreModalWrapper>

            {/* {deleteModalOpen && (
                <DeleteModal
                    closeDeleteModal={closeDeleteModal}
                />
            )} */}

            {/* {deleteModalOpen && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    }}
                    // onClick={closeModal}
                />
            )} */}
        </>
    )
}

export default MoreModal