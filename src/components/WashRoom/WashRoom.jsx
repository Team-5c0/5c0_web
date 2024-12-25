import React, { useEffect } from "react";
import * as S from "./styles";
import { useState } from "react";

const WashRoom = ({ room }) => {
  const [state, setState] = useState([]); 
  const handleClick = (roomid) => {
    const isSelected = state.includes(roomid); 

    const updatedState = isSelected 
      ? state.filter((id) => id !== roomid) 
      : [...state, roomid]; 
    setState(updatedState);
    localStorage.setItem("roomId", updatedState.join(","));
  };
  useEffect(() => {
    state.pop();
  }, [state]);
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
