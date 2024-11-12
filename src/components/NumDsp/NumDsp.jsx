import React from "react";
import * as S from './styles'

const NumDsp = ({text}) => {
    return (
        <S.Wrapper>
            <S.InputBoxText>{text}</S.InputBoxText>
        </S.Wrapper>
    )

}
export default NumDsp;