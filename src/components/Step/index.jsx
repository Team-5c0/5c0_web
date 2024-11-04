import React from 'react';
import * as S from './style';

const Step = ({step}) => {

    return (
        <S.Wrapper>
            <S.StepContainer>
                <S.Circle className={step === 1 ? 'active' : ''}/>
                <S.Text>
                    세탁기 선택
                </S.Text>
            </S.StepContainer>
            <S.StepContainer>
                <S.Circle className={step === 2 ? 'active' : ''}/>
                <S.Text>
                    사용 시간 설정
                </S.Text>
            </S.StepContainer>
            <S.StepContainer>
                <S.Circle className={step === 3 ? 'active' : ''}/>
                <S.Text>
                    사용자 확인
                </S.Text>
            </S.StepContainer>
            <S.StepContainer>
                <S.Circle className={step === 4 ? 'active' : ''}/>
                <S.Text>
                    완료
                </S.Text>
            </S.StepContainer>
        </S.Wrapper>
    )
}
export default Step;
