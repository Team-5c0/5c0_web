import styled from 'styled-components'
import '../../index.css'

export const Wrapper = styled.div`
    //width: 100%;
    height: 10vw;
    display: flex;
    align-items: center;
    justify-content: center;

`
export const Textbox = styled.div`
    border: #000000 1px solid;
    background: #FFFFFF;
    color: #000000;
    border-radius: 10px;
    padding: 1.5%;
    margin-left: 1%;
    margin-right: 1%;
    
    &:active {
        background: #000000;
        color: #FFFFFF;
        
    }
    
    
`
export const TextBoxText = styled.span`
    font-family: "Pretendard-Medium",sans-serif;
    width: 100%;
    font-size: 3vw;
    text-align: center;
    user-select: none;
`