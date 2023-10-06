import { styled } from "styled-components";

export const Modal = styled.div`
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  width: 100%;
  max-width: 345px;
  height: 640px;
  border-radius: 10px;
  background-color: #fbedd0;
  z-index: 400;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  opacity: 0%;
`;

export const ModalInner = styled.div`
  width: 100%;
  height: 100%;

  border-radius: 10px;
  padding: 15px;
  border: 3px solid #744a21;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  a {
    width: 100%;
  }
`;

export const ModalText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;
export const ModalBigTitle = styled.div`
  font-size: 18px;
  color: ${props => props.color};
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
`;
export const ModalBigTitleBox = styled.div`
  line-height: 230%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 20px;
`;
export const ModalTitle = styled.div`
  font-size: 14px;
  color: ${props => props.color};
  margin-bottom: 5px;
  line-height: 110%;
`;

export const ModalMinTitle = styled.div`
  width: 100%;
  font-size: 10px;
  color: ${props => props.color};
  margin-bottom: 20px;
  line-height: 110%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContentBox = styled.div`
  display: flex;

  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 20px;
`;
export const ModalContent = styled.div`
  font-size: 12px;
  color: ${props => props.color};
  margin-bottom: 5px;
  line-height: 110%;
`;

export const ModalBtn = styled.div`
  font-size: 14px;
  width: 100%;
  padding: 20px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background: #f0939e;
  color: white;
`;
