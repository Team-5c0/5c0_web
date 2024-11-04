import React from "react";
import * as S from "./style";
import useText from "../../../hooks/useText";
import NumPad from "../../../components/NumPad";
import Step from "../../../components/Step";


const NamePage = () => {
    const text = useText('(학번으로 입력)',4, '/end', 'userId');
    return (
        <S.Wrapper>
            <S.ContentContainer>
                <Step step={3}/>
                <S.Text>
                    자신의 학번 입력
                </S.Text>
            </S.ContentContainer>
            <S.NumPadContainer>
                <NumPad value={text.text} setValue={text.texting} length={text.length}/>
            </S.NumPadContainer>
        </S.Wrapper>
    )
}
export default NamePage;