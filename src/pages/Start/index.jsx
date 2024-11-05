import React from "react";
import * as s from "./style";
import { useNavigate } from "react-router-dom";

const StartPage = () => {
  const navigate = useNavigate();
  const go = () => {
    navigate("/main");
  };
  return (
    <>
      <s.All>
        <s.Wrapper>
          <s.Title>
            <s.TitleContainer>
              슬기로운 세탁생활
              <s.Introduce>세탁시작 후 시간 확인하고 입력해주세요</s.Introduce>
            </s.TitleContainer>
          </s.Title>
          <s.Footer>
            <s.Button onClick={go}>
              <s.ButtonTxt>Enter⏎</s.ButtonTxt>
            </s.Button>
          </s.Footer>
        </s.Wrapper>
      </s.All>
    </>
  );
};
export default StartPage;
