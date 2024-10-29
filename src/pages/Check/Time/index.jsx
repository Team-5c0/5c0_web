import React from "react";
import * as S from "./styles";
import NumBtn from "../../../components/NumBtn/NumBtn";
import NumDsp from "../../../components/NumDsp/NumDsp";
import {useState} from "react";
import {useNavigate} from "react-router-dom";


const TimePage = () => {
    const [text, setText] = useState('(분 단위로 입력)');
    const navigate = useNavigate();
    const Texting = (e) => {
        let data = text + e

        if (e === 'clear') {
            data = ''
        }
        if (data.length > 3) {
            data = text
        }
        if (data.length === 0) {
            data = '(분 단위로 입력)'
        }
        else if (data === '(분 단위로 입력)') {
            data = e==='enter' ? '(분 단위로 입력)' : e
        }
        if(e === 'enter' && text !== '(분 단위로 입력)' && Number(text) !== 0) {
            localStorage.setItem('washMinutes',text)
            navigate("/name");
        }
        setText(data);
    }
    return (
        <S.Wrapper>
            <S.Container>
                <S.Text>
                    세탁기 사용할 시간
                </S.Text>
                <NumDsp text={text}/>
                <NumBtn setText={Texting}/>
            </S.Container>
        </S.Wrapper>
    )
}
export default TimePage;