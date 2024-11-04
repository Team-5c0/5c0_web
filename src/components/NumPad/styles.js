import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
`
export const Display = styled.div`
`
export const NumberContainer = styled.div`
    width: 100%;
    height: 10%;
    //height: 100%;
    grid-template-columns: repeat(3,1fr);
    display: grid;
    justify-content: center;
    //gap: 5%;
`

export const Box = styled.div`
    border: 1px solid black;
    background-color: white;
    color: black;
    margin: 1%;
    display: flex;
    justify-content: center;
    align-items: center;
    &:active {
        background-color: black;
        color: white;
    }
`
export const EnterBox = styled(Box)`
    grid-column: 1 / 4;
`

export const BoxText = styled.span`
    font-family: Pretendard-Medium,sans-serif;
    font-size: 200%;
`