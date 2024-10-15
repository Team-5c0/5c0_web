import React from 'react';
import * as S from './styles';
import Wash from "../../components/Wash/index";


const MainPage = () => {

    return (
    <>
        <h1>세탁기 선택</h1>
        <S.Container>
            <Wash text='wow' />
            <Wash text='wow' />
        </S.Container>
    </>
    )
}
export default MainPage;