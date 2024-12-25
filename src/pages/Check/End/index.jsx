import React, {useEffect} from "react";
import * as S from "./style";
import {useNavigate} from "react-router-dom";
import Step from "../../../components/Step";
import Header from "../../../components/Header";

const EndPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/');
        }, 1500);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <S.Wrapper>
            <Header/>
            <S.ValueContainer>
                <Step step={5}/>
                <S.CheckIcon>✓</S.CheckIcon>
                <S.Content>사용자 설정이 완료되었습니다</S.Content>
            </S.ValueContainer>
        </S.Wrapper>
    )
}
export default EndPage;

