import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    //gap: 10px;
    //border-radius: 25px;
    //box-sizing: border-box;
    //box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);
    //background: rgba(255, 255, 255, 0.05);
    //border: 2px solid rgba(255, 255, 255, 0.1);
    //backdrop-filter: blur(35px);
    grid-template-columns: repeat(3,1fr);
    justify-content: center;
    align-items: center;
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
export const Box = styled.div`
    width: 125px;
    margin: 5px;
    aspect-ratio: 1/1;
    border-radius: 15px;
    box-shadow: -2px -2px 5px 1px rgba(0, 0, 0, 0.5) inset;
    background-color: rgba(255, 255, 255, 1);
    transition: transform 0s, box-shadow 0.2s;
    color: black;
    user-select: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    &:active {
        box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.5) inset; /* active 시 그림자를 줄여 눌리는 효과 */
        transform: translateY(2px); /* active 시 살짝 내려가면서 눌리는 느낌 */
    }

    //&:active {
    //    background-color: rgba(0, 0, 0, 0.5);
    //    color: white;
    //}
`
export const EnterBox = styled(Box)`
    //grid-row: 1/3;
    width: 340px;
    grid-column-start: 1;
    grid-column-end: 4;
    //width: 300px;
    aspect-ratio: 3/1;
`

export const BoxText = styled.span`
    font-family: pretendard-Medium,sans-serif;
    font-weight: bolder;
    font-size: 250%;
`