import styled from 'styled-components'


export const Wrapper = styled.div`
    align-items: center;
`

export const Container = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(30%,1fr));
    margin: 10%;
    
    grid-gap: 1em
`
export const Title = styled.p`
    text-align: center;
    font-family: Pretendard-Medium, sans-serif;
    font-size: 3.5em;
    margin-top: 5%;
    margin-bottom: 5%;
`