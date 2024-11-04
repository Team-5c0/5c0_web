import React from "react";
import * as S from "./styles";
import NumBtn from "../../components/NumBtn/NumBtn.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminPw = () => {
  const [text, setText] = useState("");
  const password = 1111;
  const navigate = useNavigate();
  const next = () => {
    navigate("/admin");
  };
  const Texting = (e) => {
    let data = text + e;
    console.log(data.length);

    if (e === "clear") {
      data = "";
    }
    if (data.length > 4) {                      
      data = text;
    }
    if (e === "enter") {
      const time = Number(text);
      console.log("이게 내가 원하는 값", text);
      if (text == password) {
        next();
      } else {
        console.log("비밀번호가 옳지 않습니다.");
      }
    }
    setText(data);
  };

  return (
    <>
      <S.Wrapper>
      <S.Container>
        <S.AdPw>비밀번호</S.AdPw>
        <S.InputBox>
          <S.InputBoxText>{text}</S.InputBoxText>
        </S.InputBox>
        <NumBtn setText={Texting} />
    </S.Container>
      </S.Wrapper>
    </>
  );
};

export default AdminPw;
