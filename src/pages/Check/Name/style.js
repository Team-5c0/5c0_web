import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 20% 60% 20%;
    align-items: center;
    background-image: linear-gradient(90deg, #1A2D5B,#0B1328);
    //justify-content: center;
`
export const ContentContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
export const ValueContainer = styled.div`
    width: 100%;
    display: flex;
    height: 60%;
    flex-direction: column;
    align-items: center;
`
export const NumPadContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-self: start;
`
export const Title = styled.p`
    text-align: center;
    font-family: Pretendard-Medium,sans-serif;
    font-size: 3.5em;
    margin-top: 5%;
    margin-bottom: 5%;
    color: white;
`