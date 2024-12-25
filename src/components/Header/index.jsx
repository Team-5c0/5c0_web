import React from 'react';
import * as S from './style';
import logo from '../../assets/images/img.png'


const Header = () => {
    return (
        <S.Wrapper>
            <S.Icon src={logo}/>
            <S.LogoContainer>
                <S.LogoText>Time Economy</S.LogoText>
                <S.Logo>TECO</S.Logo>
            </S.LogoContainer>
        </S.Wrapper>
    )
}
export default Header;