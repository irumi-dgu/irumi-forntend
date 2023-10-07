// DetailLantern.jsx

import React, { useState } from "react";
import * as S from "./style";
import MoreModal from "./MoreModal";
import DeleteModal from "./DeleteModal";
import PwModal from "./PwModal";
import ReportModal from "./ReportModal";
import ReportAlertModal from "./ReportAlertModal";
import ReportedAlertModal from "./ReportedAlertModal";
import { useParams } from "react-router-dom";
import { API } from "../../api/axios";

function DetailLantern({
  data,
  isLiked,
  setIsLiked,
  likeCount,
  setLikeCount,
  lightBool,
  setLightBool
}) {
  const [modalOpen, setModalOpen] = useState(false);
  // 삭제
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [pwModalOpen, setPwModalOpen] = useState(false);
  // 신고
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [reportedModalOpen, setReportedModalOpen] = useState(false);
  const [isReportedModalOpen, setIsReportedModalOpen] = useState(false);
  const [isReported, setIsReported] = useState(false);

  const { detailId } = useParams();

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
  // 이미 신고한 게시글 모달
  const openIsReportedModal = () => {
    setIsReportedModalOpen(true);
    closeReportModal();
    setTimeout(() => {
      setIsReportedModalOpen(false);
    }, 1500);
  };

  // 좋아요
  const handleLike = async () => {
    if (isLiked === true) {
      try {
        setIsLiked(false);
        setLikeCount(prevCount => prevCount - 1);

        if (likeCount <= 10) {
          setLightBool(false);
        } else {
          setLightBool(true);
        }

        const response = await API.post(`/api/lanterns/${detailId}/likes`);
        if (response.status === 200) {
          // console.log("좋아요 취소 완료");
        } else {
          // console.log("200 ok 아님, 좋아요 취소 오류");
        }
      } catch (error) {
        // console.log("좋아요 취소 중 오류 발생", error);
      }
    } else if (isLiked === false) {
      try {
        const response = await API.post(`/api/lanterns/${detailId}/likes`);
        if (response.status === 200) {
          setIsLiked(true);
          setLikeCount(prevCount => prevCount + 1);

          if (likeCount >= 9) {
            setLightBool(true);
          } else {
            setLightBool(false);
          }
        } else {
          // console.log("200 ok 아님, 좋아요 오류");
        }
      } catch (error) {
        // console.log("좋아요 중 오류 발생", error);
      }
    } else {
      // console.log("좋아요 중 오류 발생");
    }
  };

  return (
    <>
      <S.DetailLanternWrapper key={data.id}>
        <S.DetailLanternImg
          img
          src={`/detail_${data.lanternColor}_${lightBool}.png`}
        />
        <S.TitleSec>{data.nickname}</S.TitleSec>
        <S.ContentSec>{data.content}</S.ContentSec>
        <S.MoreSecContainer onClick={openModal}>
          <S.MoreSec src="/moreBtn.png" />
        </S.MoreSecContainer>
        <S.LikeBtn>
          <img
            src={isLiked ? "/detail_like_fill.png" : "/detail_like.png"}
            onClick={handleLike}
          />
          <p>{likeCount}</p>
        </S.LikeBtn>
      </S.DetailLanternWrapper>

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
          data={data}
        />
      )}

      {/* 신고 모달 */}
      {reportModalOpen && (
        <ReportModal
          closeReportModal={closeReportModal}
          openReportedModal={openReportedModal}
          openIsReportedModal={openIsReportedModal}
          detailId={detailId}
        />
      )}
      {/* 신고 완료 모달 */}
      {reportedModalOpen && <ReportAlertModal />}
      {/* 이미 신고한 게시글 모달 */}
      {isReportedModalOpen && <ReportedAlertModal />}

      {/* 뒷 배경 어둡게 */}
      {(deleteModalOpen ||
        pwModalOpen ||
        reportModalOpen ||
        reportedModalOpen ||
        isReportedModalOpen) && (
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
      )}
    </>
  );
}

export default DetailLantern;
