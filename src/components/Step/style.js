import styled from "styled-components";

const InActive = "#aaaaaa";
const Active = "#4caf50";

export const Wrapper = styled.div`
    width: 100%;
    height: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const StepsContainer = styled.div`
       display: flex;
       width: 80%;
       max-width: 600px;
       margin-bottom: 20px;
`
export const StepContainer = styled.div`
    width: 25%;
    display: flex;
    justify-content: center;
`
export const StatsContainer = styled(StepsContainer)``
export const StatContainer = styled(StepContainer)`
    position: relative;
`
export const Circle = styled.div`
    width: 30px;
    height: 30px;
    z-index: 2;
    background-color: ${InActive};
    backdrop-filter: opacity(100%);
    border-radius: 100%;
    &.active {
        background-color: ${Active};
    }
`
export const Text = styled.span`
    font-family: Pretendard-Medium, sans-serif;
    font-size: 1.5rem;
    
`

export const Line = styled.div`
    width: 100%;
    height: 2px;
    flex: 1;
    position: absolute;
    bottom: 50%;
    right: 50%;
    background-color: ${InActive};
    z-index: 1;
    &.start {
        width: 0;
    }
    &.active {
        background-color: ${Active};
    }
`