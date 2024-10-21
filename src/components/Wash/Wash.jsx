import React from "react";
import * as S from './styles';
// import {GlobalStyle} from "../../../public/index";
import {useNavigate} from "react-router-dom";


const Wash=({text})=>{
    const navigate = useNavigate()
    const next = () => {navigate('/main/time');
}
    return(
        <S.Container onClick={next}>
            <S.Textbox>
                {text}
            </S.Textbox>
        </S.Container>
    )
}

export default Wash;