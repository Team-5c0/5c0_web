import React from "react";
import * as S from './style';
// import {GlobalStyle} from "../../../public/index";
import {useNavigate} from "react-router-dom";


const Wash=({values})=>{
    if (values === undefined){
        values = {available:true,washerId:'test',washerType:'washer'};
    }
    const setWasher = (Id)=>{
        localStorage.setItem("washerId",Id);
    };
    const navigate = useNavigate();


    return(
        <S.Container className={values.available ? 'available' : ''} onClick={()=>{
            setWasher(values.washerId);
            navigate(values.available ? '/time' : '/main');}}>
            <S.Textbox>
                {values.washerId}
                <br/>
                {values.washerType}
            </S.Textbox>
        </S.Container>
    )
}

export default Wash;