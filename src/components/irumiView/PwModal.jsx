// PwModal.jsx

import React, { useState } from 'react';
import * as S from "./style";
import AlertModal from './AlertModal';
import { useNavigate } from 'react-router-dom';

function PwModal({ openPwModal, closePwModal }) {
    const [password, setPassword] = useState("");
    const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
    const [alertOpen, setAlertOpen] = useState(false);
    const navigate = useNavigate();

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
    const handleDelete = () => {
        // POST 요청 보내기

        // 비밀번호 일치
        if (password === "1111") {
            setIsPasswordCorrect(true);
            // openAlert();
            setAlertOpen(true);
            // closePwModal();

            // 2초 뒤 둘러보기 페이지로
            setTimeout(() => {
                closeAlert();
                navigate("/lanterns")
            }, 2000);
        } else {
            // 비밀번호 불일치
            setIsPasswordCorrect(false);
            // openAlert();
            setAlertOpen(true);

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
