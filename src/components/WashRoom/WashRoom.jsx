import React from "react";
import * as S from "./styles";
import { useState } from "react";

const WashRoom = ({ room }) => {
  const [state, setState] = useState([]); //roomid의 상태를 관리하는 useState

  const handleClick = (roomid) => {
    const isSelected = state.includes(roomid); //배열의 항목에 특정 값이 포함되어 있는지를 판단 state.includes
    //포함되어 있으면 선택 해제 (배열에서 제거), 그렇지 않으면 배열에 추가
    const updatedState = isSelected //선택된 roomid를 updatedState에 포함시킨다
      ? state.filter((id) => id !== roomid) //선택 해제할 때 roomid를 제외한 새로운 배열 생성
      : [...state, roomid]; //선택할 때: 기존 배열에 roomid추가

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
