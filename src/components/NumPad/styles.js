import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
`
export const Display = styled.div`
`
export const NumberContainer = styled.div`
    width: 100%;
    display: grid;
    //justify-content: center;
    grid-template-columns: repeat(3,1fr);
    gap: 5%;
`

export const Box = styled.div`
    border: 1px solid black;
    background-color: white;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    &:active {
        background-color: black;
        color: white;
    }
`

export const FuncNumBox = styled(Box)`
    //grid-column: 1 / 3;
`
export const BoxText = styled.span`
    font-family: Pretendard-Medium,sans-serif;
    font-size: 1em;
`