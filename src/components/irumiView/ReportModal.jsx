import React, { useState } from "react";
import * as S from "./style";
import { API } from "../../api/axios";

function ReportModal({
  closeReportModal,
  openReportedModal,
  openIsReportedModal,
  detailId
}) {

  const [selectedCategories, setSelectedCategories] = useState([]);

  const toggleCategory = category => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleReport = async () => {
    try {
      const response = await API.post(
        `/api/lanterns/${detailId}/report`,
        {
          category: selectedCategories
        },
        {
          withCredentials: true // withCredentials 옵션을 요청 설정 객체 안에 넣어야 합니다.
        }
      );
      openReportedModal();
    } catch (error) {
      // console.log("연등 신고 시 오류 발생", error);

      openIsReportedModal();
    }
  };

  return (
    <>
      <S.ReportModalWrapper>
        <S.ReportBox>
          <S.ReportTitle>
            해당 게시글을 정말
            <br />
            신고하시겠습니까?
          </S.ReportTitle>
          <S.ReportCheckBoxs>
            <S.CheckBox>
              <input
                type="checkbox"
                name="abuse"
                checked={selectedCategories.includes("abuse")}
                onChange={() => toggleCategory("abuse")}
                required
              />
              <p>욕설 및 비하</p>
            </S.CheckBox>
            <S.CheckBox>
              <input
                type="checkbox"
                name="fraud"
                checked={selectedCategories.includes("fraud")}
                onChange={() => toggleCategory("fraud")}
                required
              />
              <p>개인정보 유출 사칭, 사기</p>
            </S.CheckBox>
            <S.CheckBox>
              <input
                type="checkbox"
                name="explicit"
                checked={selectedCategories.includes("explicit")}
                onChange={() => toggleCategory("explicit")}
                required
              />
              <p>음란물 또는 불건전한 대화</p>
            </S.CheckBox>
            <S.CheckBox>
              <input
                type="checkbox"
                name="promotion"
                checked={selectedCategories.includes("promotion")}
                onChange={() => toggleCategory("promotion")}
                required
              />
              <p>영리목적이나 홍보성 게시글</p>
            </S.CheckBox>
          </S.ReportCheckBoxs>
          <S.Explain>
            신고는 반대의견을 나타내는 기능이 아닙니다.
            <br />
            신고 사유에 맞지 않는 신고를 했을 경우,
            <br />
            해당 신고는 처리되지 않습니다.
          </S.Explain>
          <S.ReportBtnBox>
            <S.ReportNoBtn onClick={closeReportModal}>취소</S.ReportNoBtn>
            <S.ReportYesBtn onClick={handleReport}>신고</S.ReportYesBtn>
          </S.ReportBtnBox>
        </S.ReportBox>
      </S.ReportModalWrapper>
    </>
  );
}

export default ReportModal;
