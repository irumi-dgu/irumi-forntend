import React, { useState } from 'react';
import * as S from "./style";
import AlertModal from './AlertModal';

function PwModal({ openPwModal, closePwModal }) {
    const [password, setPassword] = useState("");
    const [alertOpen, setAlertOpen] = useState(false);
    const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);

    const openAlert = () => {
        setAlertOpen(true);
        closePwModal();
    }
    const closeAlert = () => {
        setAlertOpen(false);
    }

    const handleDelete = () => {
        // 실제로는 서버로 비밀번호를 보내고 일치 여부를 확인하는 POST 요청을 보냅니다.
        // 아래의 코드는 시뮬레이션을 위한 가상 코드입니다.

        // 비밀번호가 일치하는 경우
        if (password === "1111") {
            setIsPasswordCorrect(true);
            setAlertOpen(true);
            // closePwModal();
            // openAlert();

            // 1초 뒤에 모달을 닫습니다.
            setTimeout(() => {
                closePwModal();
                setAlertOpen(false);
            }, 2000);
        } else {
            // 비밀번호가 일치하지 않는 경우
            setIsPasswordCorrect(false);
            setAlertOpen(true);
            // openAlert();
            // setAlertOpen(true);

            // 1초 뒤에 다시 비밀번호 입력 모달을 엽니다.
            setTimeout(() => {
                setAlertOpen(false);
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
                <AlertModal isPasswordCorrect={isPasswordCorrect} closeAlert={closeAlert} />
            )}
        </>
    )
}

export default PwModal;
