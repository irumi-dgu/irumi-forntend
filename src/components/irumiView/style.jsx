import { styled } from "styled-components";

// DetailLantern.jsx
export const DetailLanternWrapper = styled.div`
    /* border: 1px solid red; */
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const TitleSec = styled.div`
    position: absolute;
    top: 445px;
    width: 344px;
    padding: 0 63.26px;
    color: #5B3A1A;
    font-size: 16px;
    font-weight: 400;
    /* border: 2px solid pink; */
    display: flex;
    justify-content: center;
`
export const ContentSec = styled(TitleSec)`
    top: 478px;
    font-size: 14px;
    padding: 0 98px;
    line-height: 130%;
`
export const MoreSec = styled.img`
    position: absolute;
    top: 410px;
    right: 76px;
    width: 25px;
    height: 20px;
    padding: 0 10px;
    /* border: 1px solid blue; */
`
export const LikeBtn = styled.div`
    position: absolute;
    bottom: 15.32px;
    right: 86px;
    width: 50px;
    height: 21px;
    /* border: 1px solid orange; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    img {
        width: 24px;
        height: 21px;
    }
    p {
        color: #5B3A1A;
        font-size: 14px;
        font-weight: 400;
    }
`

// MoreModal.jsx
export const MoreModalWrapper = styled.div`
    position: fixed;
    bottom: 0;
    padding: 632px 31px 22px 31px;
`
export const MoreBtnBox = styled.div`
    width: 368px;
    height: 163px;
    border-radius: 15px;
    background-color: #F1F1F1;
    margin-bottom: 8px;
`
export const DeleteBtn = styled.div`
    width: 368px;
    height: 58px;
    border-bottom: 0.5px solid #3D4353;
    background-color: #F1F1F1;
    color: #0C74F4;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px; /* 162.5% */
`
export const MoreTitle = styled(DeleteBtn)`
    height: 46px;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    color: #3D4353;
    font-size: 12px;
`
export const ReportBtn = styled(DeleteBtn)`
    height: 58px;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
    border-bottom: none;
`
export const XBtn = styled(MoreBtnBox)`
    height: 59px;
    background-color: #FFF;
    color: #C31010;
    font-size: 16px;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0;
`