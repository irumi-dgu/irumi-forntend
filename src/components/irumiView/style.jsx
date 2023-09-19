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
    /* border: 2px solid pink; */
`