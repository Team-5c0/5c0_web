import React from 'react';
import * as S from './style';

const Step = ({step}) => {

    const steps = ['시작','세탁기 선택', '사용 시간', '사용자 확인', '완료'];

    return (
        <S.Wrapper>
            <S.StatsContainer>
                {steps.map((value, index) => (
                    <S.StatContainer key={index}>
                        <S.Line
                            className={(index === 0 ? 'start' : '') + ' ' + (index <= step ? 'active' : '')}
                        />
                        <S.Circle className={index < step ? 'active' : ''}/>
                    </S.StatContainer>
                ))}
            </S.StatsContainer>
            <S.StepsContainer>
                {steps.map((value, index) => (
                    <S.StepContainer key={index}>
                        <S.Text>
                            {value}
                        </S.Text>
                    </S.StepContainer>
                ))}
            </S.StepsContainer>
        </S.Wrapper>
    )
}
export default Step;
