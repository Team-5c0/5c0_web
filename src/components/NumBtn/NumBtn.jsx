import React from "react";
import * as S from "./styles"

const Num = ({btnText,setText})=>{
    return (
        <S.Textbox onClick={()=>setText(btnText)}>
            <S.TextBoxText>{btnText}</S.TextBoxText>
        </S.Textbox>
    )
}
const NumBtn=({setText})=>{

    return(
        <S.Wrapper >
            <Num btnText='clear' setText={setText}/>
            <Num btnText='0' setText={setText}/>
            <Num btnText='1' setText={setText}/>
            <Num btnText='2' setText={setText}/>
            <Num btnText='3' setText={setText}/>
            <Num btnText='4' setText={setText}/>
            <Num btnText='5' setText={setText}/>
            <Num btnText='6' setText={setText}/>
            <Num btnText='7' setText={setText}/>
            <Num btnText='8' setText={setText}/>
            <Num btnText='9' setText={setText}/>
            <Num btnText='enter' setText={setText}/>
        </S.Wrapper>

    )
}

export default NumBtn;