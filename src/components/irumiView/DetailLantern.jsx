// DetailLantern.jsx

import React, { useState } from 'react'
import * as S from "./style";
import MoreModal from './MoreModal';
import DeleteModal from './DeleteModal';

function DetailLantern() {
    const [modalOpen, setModalOpen] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    const openDeleteModal = () => {
        setDeleteModalOpen(true);
        closeModal();
    };
    const closeDeleteModal = () => {
        setDeleteModalOpen(false);
        closeModal();
    };

    // get 해올거
    const data = [{
        "id": 3,
        "nickname": "20 김강민",
        "content": "여친 사귀고 싶다 여백 확인 중 길게길게 써보는 중 어케되나 함보자 배가고프구나",
        "likes": 23,
        "lanternColor": 5,
        "twinkle": true,
    }]

    // 연등 -> 이미지로 매핑
    const getImageUrl = (lanternColor, twinkle) => {
        if (lanternColor >= 1 && lanternColor <= 5) {
            const twinkleToggle = twinkle ? "yes" : "no";
            return `/detail_${lanternColor}_${twinkleToggle}.svg`;
        }
        return "/detail_1_yes.svg";
    }

    return (
        <>
            {data.map((item) => (
                <S.DetailLanternWrapper key={item.id}>
                    <img src={getImageUrl(item.lanternColor, item.twinkle)} />
                    <S.TitleSec>{item.nickname}</S.TitleSec>
                    <S.ContentSec>{item.content}</S.ContentSec>
                    <S.MoreSec
                        src="/moreBtn.png"
                        onClick={openModal}
                    />
                    <S.LikeBtn>
                        <img src="/detail_like.png" />
                        <p>{item.likes}</p>
                    </S.LikeBtn>
                </S.DetailLanternWrapper>
            ))}

            {modalOpen && (
                <MoreModal
                    closeModal={closeModal}
                    openDeleteModal={openDeleteModal}
                />
            )}

            {deleteModalOpen && (
                <DeleteModal
                    closeDeleteModal={closeDeleteModal}
                />
            )}

            {deleteModalOpen && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    }}
                />
            )}
        </>
    )
}

export default DetailLantern