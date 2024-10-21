import React from 'react';
import * as S from './styles';
import Wash from "../../components/Wash/Wash";
import {useNavigate} from "react-router-dom";



const MainPage = () => {
    const navigate = useNavigate()
    return (
    <>
        <h1 onClick={() => {navigate('/')}}>세탁기 선택</h1>
        <S.Container>
            <Wash text='1' />
            <Wash text='2' />
            <Wash text='3' />
            <Wash text='4' />
            <Wash text='5' />
        </S.Container>
    </>
    )
}
export default MainPage;