import React from "react";
import * as S from "./style";
import useText from "../../../hooks/useText";
import NumPad from "../../../components/NumPad";
import Step from "../../../components/Step";


const TimePage = () => {
    const text = useText('(분 단위로 입력)', 3, '/name','washMinutes');

    return (
        <S.Wrapper>
            <S.ContentContainer>
                <Step step={2}/>
                <S.Text>
                    세탁기 사용할 시간
                </S.Text>
            </S.ContentContainer>
            <S.NumPadContainer>
                <NumPad value={text.text} setValue={text.texting} />
            </S.NumPadContainer>
>>>>>>> Stashed changes
        </S.Wrapper>
    )
}
export default TimePage;