import styled from "styled-components";


export const Wrapper = styled.div`
    grid-column: 1 / 3;
    width: 100%;
    display: flex;
    user-select: none;
`
export const ReturnButton = styled.div`
    margin-left: 5%;
    margin-right: 5%;
    width: 40%;
    display: flex;
    align-items: center;
    cursor: pointer;
`
export const Icon = styled.img`
    margin-right: 10px;
`
export const ReturnButtonText = styled.span`
    font-family: Pretendard-Medium,sans-serif;
    font-size: 4vw;
    color: white;
`
export const NextButton = styled.div`
    width: 40%;
    margin-left: 5%;
    display: flex;
    justify-content: center;
    cursor: pointer;
    border-radius: 15px;
    background-color: #1A2D5B;
    padding-top: 10px;
    padding-bottom: 10px;
`
export const NextButtonText = styled(ReturnButtonText)`
`