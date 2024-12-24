import React from "react";
import * as S from "./style";
import useText from "../../../hooks/useText";
import NumPad from "../../../components/NumPad";
import Step from "../../../components/Step";
import NumPadDsp from "../../../components/NumPadDsp";
import PageController from "../../../components/PageController";
import Header from "../../../components/Header";


const TimePage = () => {
    const text = useText('', 'time');
    return (
        <S.Wrapper>
            <Header/>
            <S.ContentContainer>
                <Step step={2}/>
                <S.ValueContainer>
                    <S.Text>
                        세탁기 사용할 시간
                    </S.Text>
                    <NumPadDsp value={text.text} len={3} placeholder={'분'}/>
                </S.ValueContainer>
            </S.ContentContainer>
            <S.NumPadContainer>
                <NumPad value={text.text} setValue={text.texting} />
            </S.NumPadContainer>
            <PageController page={'/name'} active={text.active} error={text.error}/>
        </S.Wrapper>
    )
}
export default TimePage;