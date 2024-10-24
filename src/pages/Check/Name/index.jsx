import React, {useState} from "react";
import * as S from "./styles";
import {useNavigate} from "react-router-dom";
import NumBtn from "../../../components/NumBtn/NumBtn";

const NamePage = () => {
    const [text, setText] = useState("(학번으로 입력)");
    const navigate = useNavigate();
    const Texting = (e) => {
        let data = text + e
        console.log(data.length)

        if (e === 'clear') {
            data = ''
        }
        if (data.length > 4) {
            data = text
        }
        if (data.length === 0) {
            data = '(학번으로 입력)'
        }
        else if (data === '(학번으로 입력)') {
            data = e==='enter' ? '(학번으로 입력)' : e
        }
        if(e === 'enter' && text.length === 4) {
            const name = Number(text)
            navigate("/end");
        }
        setText(data);
    }

    return (
        <S.Wrapper>
            <S.Container>
                <S.Text>
                    자신의 학번 입력
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
export default NamePage;

// }