import React, {useState} from "react";
import * as S from "./styles";
import {useNavigate} from "react-router-dom";
import NumBtn from "../../../components/NumBtn/NumBtn";

const NamePage = () => {
    const [text, setText] = useState("");
    const navigate = useNavigate();
    const next = () => {
        navigate("/Name");
    }
    const Texting = (e) => {
        let data = text + e
        console.log(data.length)

        if (e === 'clear') {
            data = ''
        }
        if (data.length > 4) {
            data = text
        }
        if(e === 'enter') {
            const time = Number(text)
        }
        setText(data);
    }

    return (
        <S.Wrapper>
            <S.InputBox>
                <S.InputBoxText>
                    {text}
                </S.InputBoxText>
            </S.InputBox>
            <NumBtn setText={Texting}/>
        </S.Wrapper>
    )
}
export default NamePage;

// }