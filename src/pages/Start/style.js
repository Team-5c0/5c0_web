import styled from "styled-components";

export const All = styled.div`
  width: 100vw;
  height: 100vh;
  /* background-image: linear-gradient(-45deg, #f5d1c1, #d1bed7); */
  /* background-image: linear-gradient(135deg, #56ccf2, #2f80ed); */
  background-color: #272f55;
  margin: 0;
  padding: 0;
`;
export const Wrapper = styled.div`
  width: 100%;
  height: 90%;
`;
export const TitleContainer = styled.div`
  padding: 10%;
`;
export const Title = styled.span`
  font-size: 3em;
  font-weight: 900;
  color: white;
  opacity: 0.75;
`;
export const TitleColor = styled.div`
  display: inline;
`;
export const Introduce = styled.span`
  display: block;
  font-size: 0.43em;
  margin-top: 10px;
  font-weight: 350;
  color: #fff;
`;
export const Footer = styled.div`
  margin-top: 14%;
  display: flex;
  width: 96%;
  justify-content: flex-end;
`;
export const Button = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
  background: rgba(255, 255, 255, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-right-color: rgba(255, 255, 255, 0.1);
  border-bottom-color: rgba(255, 255, 255, 0.1);
  /* background-color: #192d5b; */
  padding: 3% 13%;
  border-radius: 13px;
  backdrop-filter: blur(20px);
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);
`;
export const ButtonTxt = styled.span`
  font-size: 2em;
  color: #fff;
  font-weight: 800;
`;
