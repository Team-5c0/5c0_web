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
  useEffect(() => {
    const roomData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}wash/rooms`);
        setRoom(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    roomData().then();
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
