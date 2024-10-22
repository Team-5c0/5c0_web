import React from "react";
import * as S from './styles'

const NumDsp = ({text}) => {
    return (
        <S.InputBox>
            <S.InputBoxText>{text}</S.InputBoxText>
        </S.InputBox>
    )

}
export default NumDsp;