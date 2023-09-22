import React, { useState } from 'react'
import * as S from "./style";

function ReportModal({closeReportModal, openReportedModal}) {
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);
    const [check4, setCheck4] = useState(false);

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
                            name="1"
                            checked={check1}
                            onChange={() => setCheck1((prevCheck1) => !prevCheck1)}
                            required
                        />
                        <p>욕설 및 비하</p>
                        </S.CheckBox>
                        <S.CheckBox>
                        <input
                            type="checkbox"
                            name="2"
                            checked={check2}
                            onChange={() => setCheck2((prevCheck2) => !prevCheck2)}
                            required
                        />
                        <p>개인정보 유출 사칭, 사기</p>
                        </S.CheckBox>
                        <S.CheckBox>
                        <input
                            type="checkbox"
                            name="3"
                            checked={check3}
                            onChange={() => setCheck3((prevCheck3) => !prevCheck3)}
                            required
                        />
                        <p>음란물 또는 불건전한 대화</p>
                        </S.CheckBox>
                        <S.CheckBox>
                        <input
                            type="checkbox"
                            name="4"
                            checked={check4}
                            onChange={() => setCheck4((prevCheck4) => !prevCheck4)}
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
                        <S.ReportYesBtn onClick={openReportedModal}>신고</S.ReportYesBtn>
                    </S.ReportBtnBox>
                </S.ReportBox>
            </S.ReportModalWrapper>
        </>
    )
}

export default ReportModal