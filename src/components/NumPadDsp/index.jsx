import React from 'react';
import * as S from './style';

const NumPadDsp = ({value= '',len = 4, placeholder = ''}) => {
    const valueArray = Array(len).fill(0).map((element,index) => {
        if (len - index <= value.length) {
            return value[index - len + value.length];
        }
        return 0;
    })


    return (
        <S.Wrapper>
            <S.TextContainer>
                {valueArray.map((item, index) => (
                    <S.ValueText key={index}>{item}</S.ValueText>
                ))}
                {placeholder ? <S.Value>{placeholder}</S.Value> : null}

            </S.TextContainer>

            <S.Line/>
        </S.Wrapper>
    )
}
export default NumPadDsp;