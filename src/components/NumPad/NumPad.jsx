import React from 'react';
import * as S from './styles';
import {FuncNumBox} from "./styles";

const Box = ({value, setValue}) => {
    return (
        <S.Box onClick={()=>{setValue(value)}}>
            <S.BoxText>{value}</S.BoxText>
        </S.Box>
    )
}

const NumPad = ({setValue}) => {
    return (
        <S.Wrapper>
            <S.Display></S.Display>
            <S.NumberContainer>
                <FuncNumBox value='clear' setValue={setValue}/>
                <Box value='1' setValue={setValue}/>
                <Box value='2' setValue={setValue}/>
                <Box value='3' setValue={setValue}/>
                <Box value='4' setValue={setValue}/>
                <Box value='5' setValue={setValue}/>
                <Box value='6' setValue={setValue}/>
                <Box value='7' setValue={setValue}/>
                <Box value='8' setValue={setValue}/>
                <Box value='9' setValue={setValue}/>
                <Box value='0' setValue={setValue}/>
                <FuncNumBox value='enter' setValue={setValue}/>
            </S.NumberContainer>

        </S.Wrapper>
    )
}
export default NumPad;