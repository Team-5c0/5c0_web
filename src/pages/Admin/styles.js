import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: linear-gradient(90deg, #1a2c5b, #0b1327);
`;

export const Wrap = styled.div``;

export const Font = styled.span`
  font-size: 2em;
  font-family: Pretendard-medium, sans-serif;
  color: #fff;
  &.active {
    text-align: center;
    font-size: 3em;
  }
`;
