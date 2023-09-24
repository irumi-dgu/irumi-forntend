// DetailLantern.jsx

import React, { useEffect, useState } from "react";
import * as S from "./style";
import MoreModal from "./MoreModal";
import DeleteModal from "./DeleteModal";
import PwModal from "./PwModal";
// import AlertModal from './AlertModal';
import ReportModal from "./ReportModal";
import ReportAlertModal from "./ReportAlertModal";
import { useParams } from "react-router-dom";
import { API } from "../../api/axios";

function DetailLantern({ data }) {
    const [modalOpen, setModalOpen] = useState(false);
    // 삭제
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [pwModalOpen, setPwModalOpen] = useState(false);
    // const [alertOpen, setAlertOpen] = useState(false);
    // 신고
    const [reportModalOpen, setReportModalOpen] = useState(false);
    const [reportedModalOpen, setReportedModalOpen] = useState(false);
    // 내용
    // const [lanternDetail, setLanternDetail] = useState([]);
    // 좋아요
    const [isLiked, setIsLiked] = useState(false);

    const { detailId } = useParams();
    // console.log(detailId);

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
    };
    const closePwModal = () => {
        setPwModalOpen(false);
    };
    // // 비번 일치 alert 모달
    // const openAlert = () => {
    //     setAlertOpen(true);
    //     closePwModal();
    // }
    // const closeAlert = () => {
    //     setAlertOpen(false);
    // }

    // 신고 체크박스 모달
    const openReportModal = () => {
        setReportModalOpen(true);
        closeModal();
    };
    const closeReportModal = () => {
        setReportModalOpen(false);
    };
    // 신고 완료 모달
    const openReportedModal = () => {
        setReportedModalOpen(true);
        closeReportModal();
        setTimeout(() => {
            setReportedModalOpen(false);
        }, 1500);
    };

    // get 해올거
    //   const fetchLanternDetailData = async () => {
    //     try {
    //       const response = await API.get("/api/lanterns");
    //       // const response = await API.get(`/api/lanterns/${detailId}`)
    //       setLanternDetail(response.data.results);
    //       // results
    //       console.log(lanternDetail);
    //     } catch (error) {
    //       console.log("각 id에 해당하는 연등 디테일 가져오는 중 에러 발생", error);
    //     }
    //   };
    //   useEffect(() => {
    //     fetchLanternDetailData();
    //   }, [detailId]);

    //   const data = [
    //     {
    //       id: 3,
    //       nickname: "20 김강민",
    //       content:
    //         "여친 사귀고 싶다 여백 확인 중 길게길게 써보는 중 어케되나 함보자 배가고프구나",
    //       like_cnt: 23,
    //       lantern_color: 1,
    //       light_bool: false,
    //       is_liked: true
    //     }
    //   ];

    // 연등 -> 이미지로 매핑
    // const getImageUrl = (lantern_color, light_bool) => {
    //     if (lantern_color >= 1 && lantern_color <= 5) {
    //         const twinkleToggle = light_bool ? "yes" : "no";
    //         return `/detail_${lantern_color}_${twinkleToggle}.png`;
    //     }
    //     return "/detail_1_yes.png";
    // }
    // const backgroundIamge = getImageUrl();
    // const backgroundIamge = `/detail_${lanternColor}_${lightBool}.png`

    // 좋아요
    const handleLike = async () => {
        // 경로 부분 수정 필요
        // const detailId = data.id;
        if (data.is_liked) {
            try {
                setIsLiked(i => !i);
                const response = await API.delete(`/api/lanterns/${detailId}/likes`);
                if (response.status === 200) {
                    // 204 에러?
                    console.log("좋아요 취소 완료");
                } else {
                    console.log("200 ok 아님, 좋아요 취소 오류");
                }
            } catch (error) {
                console.log("좋아요 취소 중 오류 발생", error);
            }
        } else {
            try {
                const response = await API.post(`/api/lanterns/${detailId}/likes`);
                if (response.status === 200) {
                    setIsLiked(i => !i);
                    console.log("좋아요 눌림");
                    console.log(isLiked);
                } else {
                    console.log("200 ok 아님, 좋아요 오류");
                }
            } catch (error) {
                console.log("좋아요 중 오류 발생", error);
            }
        }
    };

    return (
        <>
            {/* {lanternDetail.map((item) => ( */}
            {/* <S.DetailLanternWrapper key={item.id} imageUrl={`/detail_${item.lantern_color}_${item.light_bool}.png`} > */}
            <S.DetailLanternWrapper key={data.id}>
                {/* <S.LanternBox> */}
                <S.DetailLanternImg src={`/detail_${data.lantern_color}_${data.light_bool}.png`} />
                <S.TitleSec>{data.nickname}</S.TitleSec>
                <S.ContentSec>{data.content}</S.ContentSec>
                <S.MoreSec
                    src="/moreBtn.png"
                    onClick={openModal}
                />
                <S.LikeBtn>
                    <img
                        src={data.is_liked ? "/detail_like_fill.png" : "/detail_like.png"}
                        onClick={handleLike}
                    />
                    <p>{data.like_cnt}</p>
                </S.LikeBtn>
                {/* </S.LanternBox> */}
            </S.DetailLanternWrapper>
            {/* ))} */}

                {/* 더보기 모달 */}
                {modalOpen && (
                    <MoreModal
                        closeModal={closeModal}
                        openDeleteModal={openDeleteModal}
                        openReportModal={openReportModal}
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

    {/* 신고 모달 */ }
    {reportModalOpen && (
            <ReportModal
                closeReportModal={closeReportModal}
                openReportedModal={openReportedModal}
                detailId={detailId}
            />
    )}
    {/* 신고 완료 모달 */ }
    {
        reportedModalOpen && (
            <ReportAlertModal />
        )
    }

    {/* 뒷 배경 어둡게 */ }
    {
        (deleteModalOpen ||
            pwModalOpen ||
            reportModalOpen ||
            reportedModalOpen) && (
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)"
                }}
            />
        )
    }
    </>
  );
}

export default DetailLantern;
