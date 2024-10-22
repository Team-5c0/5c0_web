import React from "react";
import * as S from "./styles";
import NumBtn from "../../../components/NumBtn/NumBtn";
import {useState} from "react";
import {useNavigate} from "react-router-dom";


const TimePage = () => {
    const [text, setText] = useState('(분 단위로 입력)');
    const navigate = useNavigate();
    const Texting = (e) => {
        let data = text + e
        console.log(text)

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
        if(e === 'enter' && text !== '(분 단위로 입력)' && text !=='0') {
            const time = Number(text)
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
                <S.InputBox>
                    <S.InputBoxText>
                        {text}
                    </S.InputBoxText>
                </S.InputBox>
                <NumBtn setText={Texting}/>
            </S.Container>
        </S.Wrapper>
    )
}
export default TimePage;