// PwModal.jsx

import React, { useState } from 'react';
import * as S from "./style";
import AlertModal from './AlertModal';
import { useNavigate } from 'react-router-dom';
import { API } from "../../api/axios";
// import axiosInstance from "../../api/axios";

function PwModal({ openPwModal, closePwModal, data }) {
    const [password, setPassword] = useState();
    const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
    const [alertOpen, setAlertOpen] = useState(false);
    const navigate = useNavigate();

    // const { detailId } = useParams();

    const openAlert = () => {
        setAlertOpen(true);
        closePwModal();
    }
    const closeAlert = () => {
        setAlertOpen(false);
    }

    // 비밀번호 일치 -> alert 띄워주고,
    // 2초 뒤에 alert 꺼짐과 동시에 lanterns 페이지로

    // 비밀번호 불일치 -> alert 띄워주고,
    // 2초 뒤에 alert 꺼짐과 동시에 다시 비밀번호 입력 모달로
    const handleDelete = async () => {
        try {
            console.log(password);
            console.log(data.id);

            const response = await API.post(
                `/api/lanterns/${data.id}/delete`,
                {
                    password: password,
                }
            );
            console.log(response.status);
            console.log(data);
            console.log(password);

            if (response.status === 204) {
                // 비밀번호 일치
                setIsPasswordCorrect(true);
                setAlertOpen(true);
                console.log("비밀번호 일치함");

                // 2초 뒤 둘러보기 페이지로
                setTimeout(() => {
                    closeAlert();
                    navigate("/lanterns");
                }, 2000);
            } else if (response.status === 401) {
                // 비밀번호 불일치
                setIsPasswordCorrect(false);
                setAlertOpen(true);
                console.log("비밀번호 틀렸음");

                // 2초 뒤 다시 입력
                setTimeout(() => {
                    closeAlert();
                    openPwModal();
                }, 2000);
            } else {
                console.log(`HTTP 상태 코드: ${response.status}`);
            }
        } catch (error) {
            console.log("연등 삭제 중 오류 발생", error);
            // console.log(data);
            // 비밀번호 불일치
            setIsPasswordCorrect(false);
            setAlertOpen(true);
            console.log("비밀번호 틀렸음");

            // 2초 뒤 다시 입력
            setTimeout(() => {
                closeAlert();
                openPwModal();
            }, 2000);
        }
    };

    return (
        <>
            <S.PwModalWrapper>
                <S.PwBox>
                    <S.PwInputBox>
                        <p>비밀번호 입력</p>
                        <input
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </S.PwInputBox>
                    <S.SelectBox>
                        <S.NoBtn onClick={closePwModal}>취소</S.NoBtn>
                        <S.YesBtn onClick={handleDelete}>삭제</S.YesBtn>
                    </S.SelectBox>
                </S.PwBox>
            </S.PwModalWrapper>

            {alertOpen && (
                <AlertModal isPasswordCorrect={isPasswordCorrect} />
            )}
        </>
    )
}

export default PwModal;
