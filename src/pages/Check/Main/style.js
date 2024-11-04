import styled from 'styled-components'


export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-image: linear-gradient(-45deg, #f5d1c1, #d1bed7);
`

export const WashContainer = styled.div`
    width: 30%;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(30%,1fr));
    margin: 10%;
    
    grid-gap: 1em
`
export const TitleContainer = styled.div`
    width: 50%;
`
export const Title = styled.p`
    text-align: center;
    font-family: Pretendard-Medium, sans-serif;
    font-size: 3.5em;
    margin-top: 5%;
    margin-bottom: 5%;
`