import React from "react";
import * as S from "./styles";
import WashRoom from "../../components/WashRoom/WashRoom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const AdminPage = () => {
  const navigate = useNavigate();
  const [roomNum, setRoom] = useState([]);

  // const checkAdminPassword = localStorage.getItem("password");
  // if (checkAdminPassword !== 1111) {
  //   alert("잘못된 비밀번호를 입력하셨습니다.");
  //   localStorage.setItem("")
  // }
  useEffect(() => {
    const roomData = async () => {
      try {
        const response = await axios.get(`/wash/rooms`);
        setRoom(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    roomData();
  }, []);

  return (
    <>
      <S.Container>
        <div>
          <S.Font className="active">세탁실</S.Font>
          <WashRoom room={roomNum} />
          <S.Font onClick={() => navigate("/")}>confirm</S.Font>
        </div>
      </S.Container>
    </>
  );
};
export default AdminPage;
