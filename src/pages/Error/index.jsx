import React from 'react';
import {useNavigate} from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(90deg, #1a2c5b, #0b1327);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`
const ButtonContainer = styled.div`
    
`
const Title = styled.span`
    font-family: Pretendard-Medium,sans-serif;
    font-size: 60px;
    color: white;
`
const Text = styled(Title)`
    font-size: 30px;
    cursor: pointer;
`



const Error = () => {
    const navigate = useNavigate();
    return (
        <Wrapper>
            <Title>잘못된 요청입니다</Title>
            <ButtonContainer onClick={() => navigate("/")}>
                <Text>홈으로 돌아가기</Text>
            </ButtonContainer>
        </Wrapper>
    )
}
export default Error;