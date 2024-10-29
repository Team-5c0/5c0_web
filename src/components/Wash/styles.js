import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 10vw;
    border: #000000 1px solid;
    background-color: ${({available}) => available === true ? '#67a56f' : 'red'};
    color: #000000;
    border-radius: 10px;
    display: flex;
    align-items: center;

    &:active {
        background-color: #000000;
        color: #ffffff;
    }


`
export const Textbox = styled.span`
    font-family: "Pretendard-Medium",sans-serif;
    width: 100%;
    font-size: 3vw;
    text-align: center;
    user-select: none;
    
`