import styled from "styled-components";


export const Wrapper = styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const TextContainer = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-evenly;
`

export const ValueText = styled.span`
    font-family: Pretendard-Black, sans-serif;
    font-size: 4vw;
    margin-bottom: 5px;
    color: white;
`
export const Value = styled(ValueText)`
    font-family: Pretendard-Medium,sans-serif;
`
export const Line = styled.span`
    width: 100%;
    border-top: #ffffff solid 1px;
`