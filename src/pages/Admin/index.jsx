import React from "react";
import * as S from "./styles";
import WashRoom from "../../components/WashRoom/WashRoom";

const AdminPage = () => {
  return (
    <>
      <S.Font>세탁실</S.Font>
      <WashRoom />
      <S.Font>confirm</S.Font>
    </>
  );
};
export default AdminPage;
