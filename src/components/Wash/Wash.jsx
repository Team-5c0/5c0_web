import React from "react";
import * as S from './styles';
// import {GlobalStyle} from "../../../public/index";
import {useNavigate} from "react-router-dom";


const Wash=({values})=>{
    const setWasher = (Id)=>{
        localStorage.setItem("washerId",Id);
    };
    const navigate = useNavigate();

    return(
        <S.Container available={values.available} onClick={()=>{
            setWasher(values.washerId);
            navigate('/time');}}>
            <S.Textbox>
                {values.washerId}
                <br/>
                {values.washerType}
            </S.Textbox>
        </S.Container>
    )
}

export default Wash;
