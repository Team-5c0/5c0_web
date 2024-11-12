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
  margin: 1vw;
  display: grid;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  border-radius: 12px;
  &.active {
    background-color: #4E4EA0;
    color: white;
  }
`;
