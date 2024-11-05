import React from "react";
import * as S from './style';
// import {GlobalStyle} from "../../../public/index";
import {useNavigate} from "react-router-dom";

const Wash=({washer})=>{
    const navigate = useNavigate();
    if (!(washer)){
        washer = {available:true,washerId:'error',washerType:'undefined'};
    }
    const setWasher = (Id)=>{
        localStorage.setItem("washerId",Id);
    };


    return(
        <S.Container className={washer.available ? 'available' : ''} onClick={()=>{
            setWasher(washer.washerId);
            navigate(washer.available ? '/time' : '/main');}}>
            <S.Textbox>
                {washer.washerId}
                <br/>
                {washer.washerType}
            </S.Textbox>
        </S.Container>
    )
}

export default Wash;