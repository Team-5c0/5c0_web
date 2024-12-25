import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 10% 75% 15%;
    align-items: center;
    background-image: linear-gradient(90deg, #1A2D5B,#0B1328);
`
export const ValueContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Content = styled.div`
    font-family: Pretendard-Medium, sans-serif;
    //font-weight: bolder
    font-size: 2em;
    color: white;
`
export const CheckIcon = styled.span`
    font-size: 20em;
    font-weight: bolder;
    color: #A0B3FF;
`