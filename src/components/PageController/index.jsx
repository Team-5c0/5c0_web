import React from 'react';
import * as S from './style';
import arrow from '../../assets/images/arrow.png';
import {useNavigate} from "react-router-dom";
import useWashing from "../../hooks/useWashing";

const PageController = ({page='', active}) => {
    const navigate = useNavigate();
    const washing = useWashing();
    const goBack = () => {navigate(-1)}
    const goNextHandler = () => {

        if (active && page !== '/end') {navigate(page)}
        if (page === '/end') {
            const status = washing.postData();
            if (washing.done) {navigate()}
        }
    }
    const goNext = () => {
    }
    return (
        <S.Wrapper>
            <S.ReturnButton onClick={goBack}>
                <S.Icon src={arrow} alt="arrow" />
                <S.ReturnButtonText>뒤로 가기</S.ReturnButtonText>
            </S.ReturnButton>
            <S.NextButton onClick={goNext}>
                <S.NextButtonText>다음으로</S.NextButtonText>
            </S.NextButton>
        </S.Wrapper>
    )
}
export default PageController;