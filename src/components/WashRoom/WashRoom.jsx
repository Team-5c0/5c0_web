import React from "react";
import * as S from "./styles";
import { useState } from "react";

const WashRoom = ({ room }) => {
  const [state, setState] = useState([]); //roomid의 상태를 관리하는 useState

  const handleClick = (roomid) => {
    const isSelected = state.includes(roomid); //배열의 항목에 특정 값이 포함되어 있는지를 판단 state.includes
    const updatedState = isSelected //선택된 roomid를 updatedState에 포함시킨다
      ? state.filter((id) => id !== roomid) //
      : [...state, roomid];

    // 상태 업데이트
    setState(updatedState);

    // 로컬 스토리지에 저장
    localStorage.setItem("roomId", updatedState.join(","));
  };

  return (
    <>
      <S.All>
        {room.map((el, index) => (
          <S.Box
            key={index}
            className={state.includes(el.roomid) ? "active" : ""}
            onClick={() => handleClick(el.roomid)}
          >
            {el.roomid}
          </S.Box>
        ))}
      </S.All>
    </>
  );
};
export default WashRoom;
