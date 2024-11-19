import React from "react";
import * as S from "./styles";
// import NumBtn from "../../components/NumBtn/NumBtn.jsx";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import useText from "../../hooks/useText.js";
import NumPad from "../../components/NumPad/index.jsx";
const AdminPw = () => {
  // const [text, setText] = useState("");
  // const password = 1111;
  // const navigate = useNavigate();
  // const next = () => {
  //   navigate("/admin");
  // };
  // const Texting = (e) => {
  //   let data = text + e;
  //   console.log(data.length);

  //   if (e === "clear") {
  //     data = "";
  //   }
  //   if (data.length > 4) {
  //     data = text;
  //   }
  //   if (e === "enter") {
  //     const time = Number(text);
  //     console.log("이게 내가 원하는 값", text);
  //     if (text == password) {
  //       next();
  //     } else {
  //       console.log("비밀번호가 옳지 않습니다.");
  //     }
  //   }
  //   setText(data);
  // };"
  const numTxt = useText("비밀번호 입력", 4, "/admin", "password");
  // if(numTxt.text !== password){
  //   alert("올바르지 않은 비밀번호 입니다.")
  // }
  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.AdPw>세탁기를 바꾸기 전 비밀번호 입력</S.AdPw>
          {/* <S.InputBox>
          <S.InputBoxText>{text}</S.InputBoxText>
        </S.InputBox> */}
          {/* <NumBtn setText={Texting} /> */}
          <NumPad value={numTxt.text} setValue={numTxt.texting}></NumPad>
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default AdminPw;
