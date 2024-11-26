import React from "react";
import * as S from "./style";
import useText from "../../../hooks/useText";
import NumPad from "../../../components/NumPad";
import Step from "../../../components/Step";
import PageController from "../../../components/PageController";
import NumPadDsp from "../../../components/NumPadDsp";
import Header from "../../../components/Header";


const NamePage = () => {
    const text = useText('',4, 'userId' );
    return (
        <S.Wrapper>
            <Header/>
            <S.ContentContainer>
                <Step step={3}/>
                <S.ValueContainer>
                    <S.Title>
                        자신의 학번 입력
                    </S.Title>
                    <NumPadDsp value={text.text} len={4}/>
                </S.ValueContainer>
            </S.ContentContainer>
            <S.NumPadContainer>
                <NumPad value={text.text} setValue={text.texting}/>
            </S.NumPadContainer>
            <PageController page={'/end'} active={text.active}/>
        </S.Wrapper>
    )
}
export default NamePage;