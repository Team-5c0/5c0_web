import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    padding: 0;
    margin: 0;
    background-image: linear-gradient(-45deg, #f5d1c1, #d1bed7);
    overflow: hidden;
    &:before {
        content: "";
        border-radius: 50%;
        position: absolute;
        bottom: 0;
        right: 10%;
        height: 30vw;
        width: 30vw;
        background-image: linear-gradient(45deg,darken(#f5d1c1, 10%),darken(#d1bed7, 10%));
        transform: translateY(50%);
        filter: blur(10px);
    }
    &:after {
    }
`
export const ContainerTitle = styled.div`
    width: 45%;
    height: 45%;
    padding: 5%;
    display: flex;
    justify-content: space-between;
    align-items: center ;
    flex-direction: column;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(2px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-right-color: rgba(255, 255, 255, 0.1);
    border-bottom-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);
`
export const Title = styled.p`
    font-family: Pretendard-Medium,sans-serif;
    font-size: 3em;
`
export const Button = styled(ContainerTitle)`
    width: auto;
    height: auto;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 5px;
    cursor: pointer;
    padding: 5%;
`
export const ButtonText = styled.p`
    font-family: Pretendard-Medium,sans-serif;
`