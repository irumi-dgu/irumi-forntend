import React from 'react'
import * as S from "./style";

function AlertModal({ isPasswordCorrect }) {
  const alertText = isPasswordCorrect ? "연등이 삭제되었습니다" : "비밀번호가 일치하지 않습니다";

  return (
    <>
      <S.YesModalWrapper>
        <S.AlertBox>
          {alertText}
        </S.AlertBox>
      </S.YesModalWrapper>
    </>
  )
}

export default AlertModal