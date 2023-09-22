// DetailLantern.jsx

import React, { useState } from "react";
import * as S from "./style";
import MoreModal from './MoreModal';
import DeleteModal from './DeleteModal';
import PwModal from './PwModal';
import AlertModal from './AlertModal';

function DetailLantern() {
    const [modalOpen, setModalOpen] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [pwModalOpen, setPwModalOpen] = useState(false);
    // const [alertOpen, setAlertOpen] = useState(false);

    // 더보기 모달
    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    // 연등을 삭제하시겠습니까? 모달
    const openDeleteModal = () => {
        setDeleteModalOpen(true);
        closeModal();
    };
    const closeDeleteModal = () => {
        setDeleteModalOpen(false);
    };
    // 비밀번호 입력 모달
    const openPwModal = () => {
        setPwModalOpen(true);
        closeDeleteModal();
    }
    const closePwModal = () => {
        setPwModalOpen(false);
    }
    // // 비번 일치 alert 모달
    // const openAlert = () => {
    //     setAlertOpen(true);
    //     closePwModal();
    // }
    // const closeAlert = () => {
    //     setAlertOpen(false);
    // }

    // get 해올거
    const data = [{
        "id": 3,
        "nickname": "20 김강민",
        "content": "여친 사귀고 싶다 여백 확인 중 길게길게 써보는 중 어케되나 함보자 배가고프구나",
        "likes": 23,
        "lanternColor": 1,
        "twinkle": false,
    }]

    // 연등 -> 이미지로 매핑
    const getImageUrl = (lanternColor, twinkle) => {
        if (lanternColor >= 1 && lanternColor <= 5) {
            const twinkleToggle = twinkle ? "yes" : "no";
            return `/detail_${lanternColor}_${twinkleToggle}.png`;
        }
        return "/detail_1_yes.png";
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

            {/* 더보기 모달 */}
            {modalOpen && (
                <MoreModal
                    closeModal={closeModal}
                    openDeleteModal={openDeleteModal}
                />
            )}
            {/* 연등을 삭제하시겠습니까? 모달*/}
            {deleteModalOpen && (
                <DeleteModal
                    closeDeleteModal={closeDeleteModal}
                    openPwModal={openPwModal}
                />
            )}
            {/* 비밀번호 입력 모달 */}
            {pwModalOpen && (
                <PwModal
                    openPwModal={openPwModal}
                    closePwModal={closePwModal}
                    // openAlert={openAlert}
                    // closeAlert={closeAlert}
                />
            )}
            {/* 비번 일치 alert 모달 */}
            {/* {alertOpen && (
                <AlertModal />
            )} */}
            {/* 뒷 배경 어둡게 */}
            {(deleteModalOpen || pwModalOpen) && (
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

export default DetailLantern;
