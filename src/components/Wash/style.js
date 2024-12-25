import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 10vw;
    box-shadow: -2px -2px 5px 1px rgba(0, 0, 0, 0.5) inset;
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    p {
        display: block;
    }
    &.available {
        background-color: white;
        color: black;
        p {
            display: none;
        }
    }
    &.selected {
        background-color: #A0B3FF;
        color: white;
        p {
            display: none;
        }
        
    }

    &:active {
        box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.5) inset; /* active 시 그림자를 줄여 눌리는 효과 */
        transform: translateY(2px); /* active 시 살짝 내려가면서 눌리는 느낌 */
    }
    
`
export const Textbox = styled.span`
    font-family: "Pretendard-Medium",sans-serif;
    width: 100%;
    font-size: 3vw;
    text-align: center;
    user-select: none;
    //color: white;
    
`
export const Available = styled.p`
    text-align: center;
`