import styled from "styled-components";

export const Wrapper = styled.div`
    grid-column: 1/3;
    margin-left: 1%;
    display: flex;
    align-items: center;
    gap: 10px;
`

export const Icon = styled.img`
    width: 160px;
`
export const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Logo = styled.span`
    font-family: Pretendard-Black, sans-serif;
    font-size: 40px;
    color: rgba(184, 255, 253, 0.5);
`
export const LogoText = styled.span`
    color: rgba(153, 153, 153, 0.9);
    font-family: Pretendard-Medium, sans-serif;
    font-size: 14px;
    letter-spacing: 1.2px;
`