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
        <s.GotoAdmin></s.GotoAdmin>
        <s.Title>
          <s.StImg></s.StImg>
        </s.Title>
        <s.BtnContainer>
          <s.NextBtn onClick={go}>시작하기</s.NextBtn>
        </s.BtnContainer>
      </s.All>
    </>
  );
};
export default StartPage;
