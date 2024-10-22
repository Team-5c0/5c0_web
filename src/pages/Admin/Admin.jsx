import React from "react";
import * as S from "./styles";
import WashRoom from "../../components/WashRoom/WashRoom";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {

  const navigate = useNavigate()
  return (
    <>
      <S.Container>
      <S.Wrap>
      <S.Font className="active">세탁실</S.Font>
      <WashRoom />
      <S.Font onClick={()=> navigate('/')}>confirm</S.Font>
      </S.Wrap>
      </S.Container>
    </>
  );
};
export default AdminPage;
