import React from "react";
import * as S from './style';
// import {GlobalStyle} from "../../../public/index";

const Wash=({washer = {available:true,washerId:1,washerType:'undefined'}, selectedWasher, setSelectedWasher})=>{
    const setWasher = (Id)=>{
        localStorage.setItem("washerId",Id);
    };


    return(
        <S.Container className={!washer.available ? '' : selectedWasher===washer.washerId ? 'selected' :  'available' } onClick={()=>{
            if (washer.available) {
                setWasher(washer.washerId);
                setSelectedWasher(washer.washerId);}}}>
            <S.Textbox>
                {washer.washerType === 'WASHER' ? '세탁기' : '건조기'}
            </S.Textbox>
            <S.Available>사용중</S.Available>
        </S.Container>
    )
}

export default Wash;