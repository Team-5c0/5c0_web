import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    border-radius: 25px;
    background: rgba(255, 255, 255, 0.1);
    box-sizing: border-box;
    border: 2px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(35px);
    overflow: hidden;
`
// export const DisplayContainer = styled.div`
//     display: flex;
//     padding-top: 10px;
//     justify-content: center;
//     align-items: center;
// `
// export const Display = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `
// export const DisplayText = styled.span`
//     font-size: 3em;
//     font-family: Pretendard-Medium,sans-serif;
//     text-align: center;
//     padding-top: 20px;
//     padding-bottom: 20px;
//
// `
export const NumberContainer = styled.div`
    width: 100%;
    //height: 10%;
    grid-template-columns: repeat(3,1fr);
    display: grid;
    justify-content: center;
    //gap: 1%;
`

export const Box = styled.div`
    background-color: rgba(255, 255, 255, 0.05);
    color: black;
    user-select: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;

    &:active {
        background-color: rgba(0, 0, 0, 0.5);
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