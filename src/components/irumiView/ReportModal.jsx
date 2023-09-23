import React, { useState } from 'react'
import * as S from "./style";
import { API } from "../../api/axios";

function ReportModal({closeReportModal, openReportedModal}) {
    // const [abuse, setAbuse] = useState(false);
    // const [fraud, setFraud] = useState(false);
    // const [explicit, setExplicit] = useState(false);
    // const [promotion, setPromotion] = useState(false);

    const [selectedCategories, setSelectedCategories] = useState([]);

    const toggleCategory = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter((c) => c!== category));
        } else {
            setSelectedCategories([...selectedCategories, category])
        }
    }

    const handleReport = async () => {
        try {
            const response = await API.post(
                `/api/lanterns/${1}/report`,
                {
                    categories: selectedCategories
                }
            );
            console.log(response.data);
            openReportedModal();
        } catch (error) {
            console.log("연등 신고 시 오류 발생", error);
        }
    }

    return (
        <>
            <S.ReportModalWrapper>
                <S.ReportBox>
                    <S.ReportTitle>
                        해당 게시글을 정말<br />신고하시겠습니까?
                    </S.ReportTitle>
                    <S.ReportCheckBoxs>
                        <S.CheckBox>
                        <input
                            type="checkbox"
                            name="abuse"
                            // value={abuse}
                            // checked={abuse}
                            checked={selectedCategories.includes("abuse")}
                            // onChange={() => setAbuse((prevCheck1) => !prevCheck1)}
                            onChange={() => toggleCategory("abuse")}
                            required
                        />
                        <p>욕설 및 비하</p>
                        </S.CheckBox>
                        <S.CheckBox>
                        <input
                            type="checkbox"
                            name="fraud"
                            // value={fraud}
                            // checked={fraud}
                            checked={selectedCategories.includes("fraud")}
                            // onChange={() => setFraud((prevCheck2) => !prevCheck2)}
                            onChange={() => toggleCategory("fraud")}
                            required
                        />
                        <p>개인정보 유출 사칭, 사기</p>
                        </S.CheckBox>
                        <S.CheckBox>
                        <input
                            type="checkbox"
                            name="explicit"
                            // value={explicit}
                            // checked={explicit}
                            checked={selectedCategories.includes("explicit")}
                            // onChange={() => setExplicit((prevCheck3) => !prevCheck3)}
                            onChange={() => toggleCategory("explicit")}
                            required
                        />
                        <p>음란물 또는 불건전한 대화</p>
                        </S.CheckBox>
                        <S.CheckBox>
                        <input
                            type="checkbox"
                            name="promotion"
                            // value={promotion}
                            // checked={promotion}
                            checked={selectedCategories.includes("promotion")}
                            // onChange={() => setPromotion((prevCheck4) => !prevCheck4)}
                            onChange={() => toggleCategory("promotion")}
                            required
                        />
                        <p>영리목적이나 홍보성 게시글</p>
                        </S.CheckBox>
                    </S.ReportCheckBoxs>
                    <S.Explain>
                    신고는 반대의견을 나타내는 기능이 아닙니다.
                    <br />신고 사유에 맞지 않는 신고를 했을 경우, 
                    <br />해당 신고는 처리되지 않습니다.
                    </S.Explain>
                    <S.ReportBtnBox>
                        <S.ReportNoBtn onClick={closeReportModal}>취소</S.ReportNoBtn>
                        <S.ReportYesBtn onClick={handleReport}>신고</S.ReportYesBtn>
                    </S.ReportBtnBox>
                </S.ReportBox>
            </S.ReportModalWrapper>
        </>
    )
}

export default ReportModal