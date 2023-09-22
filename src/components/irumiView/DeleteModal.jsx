import React, { useState } from 'react';
import * as S from "./style";

function DeleteModal({closeDeleteModal, openPwModal}) {
    return (
        <>
            <S.DeleteModalWrapper>
                <S.DeleteBox>
                    <S.Question>연등을 삭제하시겠습니까?</S.Question>
                    <S.SelectBox>
                        <S.NoBtn onClick={closeDeleteModal}>취소</S.NoBtn>
                        <S.YesBtn onClick={openPwModal}>확인</S.YesBtn>
                    </S.SelectBox>
                </S.DeleteBox>
            </S.DeleteModalWrapper>
        </>
    )
}

export default DeleteModal