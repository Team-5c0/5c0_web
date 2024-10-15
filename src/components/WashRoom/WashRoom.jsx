import React from "react";
import * as S from "./styles";

const WashRoom = () => {
  const room = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
  ];
  return (
    <>
      <S.All>
        {room.map((room) => {
          return (
            <>
              <S.Box>{room.id}</S.Box>
            </>
          );
        })}
      </S.All>
    </>
  );
};
export default WashRoom;
