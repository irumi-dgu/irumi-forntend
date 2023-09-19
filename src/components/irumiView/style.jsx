import { styled } from "styled-components";

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
    line-height: normal;
    padding: 0 98px;
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