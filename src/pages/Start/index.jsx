import React from 'react';
import * as s from './style';
import {useNavigate} from 'react-router-dom';

const StartPage = () => {
    const navigate = useNavigate();
    const go = () => {
        navigate('/main');
    }
    return (
        <s.Wrapper>
            <s.ContainerTitle>
                <s.Title>
                    안녕하세요 👋
                </s.Title>
                <s.Button onClick={go}>
                    <s.ButtonText>
                        시작하기
                    </s.ButtonText>
                </s.Button>
            </s.ContainerTitle>
        </s.Wrapper>
    )
}
export default StartPage