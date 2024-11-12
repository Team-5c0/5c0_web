import styled from "styled-components";
import washMain from "../../assets/images/washMain.png";

export const All = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(90deg, #1a2c5b, #0b1327);
`;
export const boxContainer = styled.div`
  display: flex;
`;
export const leftBox = styled.div`
  width: 50vw;
  height: 100vw;
  background-color: #1a2c5b;
`;
export const rightBox = styled.div`
  width: 50vw;
  height: 100vw;
  background-color: #0b1327;
`;
export const Title = styled.span`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StImg = styled.img.attrs({
  src: washMain,
  alt: "슬기로운 세탁생활",
})`
  margin-top: 20px;
  width: 50%;
  user-select: none;
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const NextBtn = styled.div`
  width: fit-content;
  height: fit-content;
  background-color: #4476f3;
  color: #fff;
  font-size: 2em;
  font-weight: 700;
  padding: 1% 10%;
  user-select: none;
`;
