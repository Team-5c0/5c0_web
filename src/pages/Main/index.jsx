import React from 'react';
import * as S from './style';
import Wash from "../../components/Wash";
import {useNavigate} from "react-router-dom";



const MainPage = () => {
    const navigate = useNavigate()
    return (
    <S.Wrapper>
        <S.Title onClick={() => {navigate('/adminPW')}}>세탁기 선택</S.Title>
        <S.Container>
            <Wash text='1' />
            <Wash text='2' />
            <Wash text='3' />
            <Wash text='4' />
            <Wash text='5' />
        </S.Container>
    </S.Wrapper>
    )
}
export default MainPage;