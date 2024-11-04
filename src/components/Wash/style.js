import styled from "styled-components";
import '../../index.css'

export const Container = styled.div`
    width: 100%;
    height: 10vw;
    border: #000000 1px solid;
    background-color: rgba(205, 92, 92, 0.75);
    color: #000000;
    border-radius: 10px;
    display: flex;
    align-items: center;
    &.available {
        background-color: rgba(103, 165, 111, 0.75);
    }

    &:active {
        background-color: rgba(0, 0, 0, 0.5);
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