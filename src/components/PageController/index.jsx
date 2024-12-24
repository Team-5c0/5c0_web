import React from 'react';
import * as S from './style';
import arrow from '../../assets/images/arrow.png';
import usePageController from "../../hooks/usePageController";

const PageController = ({page = '', active, error}) => {
    const Controller = usePageController(page,active,error)
    return (
        <S.Wrapper>
            <S.ReturnButton onClick={Controller.goBack}>
                <S.Icon src={arrow} alt="arrow"/>
                <S.ReturnButtonText>뒤로 가기</S.ReturnButtonText>
            </S.ReturnButton>
            <S.NextButton onClick={Controller.goNextHandler}>
                <S.NextButtonText>다음으로</S.NextButtonText>
            </S.NextButton>
        </S.Wrapper>
    )
}
export default PageController;