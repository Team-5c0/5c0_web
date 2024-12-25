import React from "react";
import * as S from "./styles";
import useText from "../../hooks/useText.js";
import NumPad from "../../components/NumPad/index.jsx";
const AdminPw = () => {
  const numTxt = useText("비밀번호 입력", 4, "/admin"); //password
  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.AdPw>세탁기를 바꾸기 전 비밀번호 입력</S.AdPw>
          <NumPad value={numTxt.text} setValue={numTxt.texting}></NumPad>
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default AdminPw;
