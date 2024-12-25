import React, { useState, useEffect } from "react";
import * as S from "./styles";
import useText from "../../hooks/useText.js";
import NumPad from "../../components/NumPad/index.jsx";
import NumPadDsp from "../../components/NumPadDsp/index.jsx";
import PageController from "../../components/PageController/index.jsx";

const AdminPw = () => {
  const numTxt = useText("", "");
  const [state, setState] = useState(false);

  useEffect(() => {
    if (numTxt.text === "1111") {
      setState(true);
    } else {
      setState(false);
    }
  }, [numTxt.text]);

  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.AdPw>세탁기를 바꾸기 전 비밀번호 입력</S.AdPw>
          
          <S.ContentContainer>
            <NumPadDsp value={numTxt.text} len={4} />
          </S.ContentContainer>

          <S.ContentContainer>
            <S.NumPadContainer>
              <NumPad value={numTxt.text} setValue={numTxt.texting}></NumPad>
            </S.NumPadContainer>
          </S.ContentContainer>

        </S.Container>
          <PageController
            page={"/admin"}
            active={state}
            error="잘못된 비밀번호를 입력하셨습니다."
          ></PageController>
      </S.Wrapper>
    </>
  );
};

export default AdminPw;
