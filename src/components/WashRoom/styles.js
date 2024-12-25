import styled from "styled-components";
export const All = styled.div`
  width: 95vw;
  height: 80vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const Box = styled.div`
  width: fit-contents;
  min-height: fit-content;
  background-color: #fff;
  opacity: 0.9;
  margin: 1vw;
  display: grid;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  border-radius: 12px;
  font-weight: 600;
  &.active {
    background-color: #4e4ea0;
    color: white;
  }
`;
