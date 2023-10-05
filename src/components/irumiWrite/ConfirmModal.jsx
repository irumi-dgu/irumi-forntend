import React, { useState } from "react";
import * as S from "./style"; // 모달 스타일 파일을 불러옵니다.

function DeleteModal({ isOpen, onClose, onConfirm }) {
  const [clickCount, setClickCount] = useState(0);

  const handleConfirmClick = () => {
    if (clickCount === 0) {
      // 클릭 횟수가 0일 때만 처리하도록 합니다.
      onConfirm();
      setClickCount(1); // 클릭 횟수를 1로 업데이트합니다.
    }
  };

  if (!isOpen) return null;

  return (
    <S.ConfirmModalWrapper>
      <S.ConfirmBox>
        <S.Question>
          확인을 누르시면 연등이 달립니다! <br />
          달린 연등은 수정이 불가능해요.
        </S.Question>
        <S.SelectBox>
          <S.NoBtn onClick={onClose}>취소</S.NoBtn>
          <S.YesBtn onClick={handleConfirmClick}>확인</S.YesBtn>
        </S.SelectBox>
      </S.ConfirmBox>
    </S.ConfirmModalWrapper>
  );
}
export default DeleteModal;

//기존 코드
// export default DeleteModal;

// import React from "react";
// import * as S from "./style";

// function DeleteModal({ isOpen, onClose, onConfirm }) {
//   if (!isOpen) return null;

//   return (
//     <S.ConfirmModalWrapper>
//       <S.ConfirmBox>
//         <S.Question>
//           확인을 누르시면 연등이 달립니다! <br />
//           달린 연등은 수정이 불가능해요.
//         </S.Question>
//         <S.SelectBox>
//           <S.NoBtn onClick={onClose}>취소</S.NoBtn>
//           <S.YesBtn onClick={onConfirm}>확인</S.YesBtn>
//         </S.SelectBox>
//       </S.ConfirmBox>
//     </S.ConfirmModalWrapper>
//   );
// }

// export default DeleteModal;
