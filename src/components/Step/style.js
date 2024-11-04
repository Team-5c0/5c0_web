import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 25%;
    display: flex;
    justify-content: space-evenly;
`
export const StepContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Circle = styled.div`
    width: 15px;
    height: 15px;
    background-color: rgba(255,255,255,0.25);
    backdrop-filter: blur(35px);
    border-radius: 100%;
    &.active {
        background-color: rgba(255,255,255, 0.75);
        font-weight: bolder;
    }
`
export const Text = styled.span`
    font-family: Pretendard-Medium, sans-serif;
    font-size: 1.5em;
    
`