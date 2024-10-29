import React from "react";
import * as S from "./styles";
import { useState } from "react";

const WashRoom = ({ room }) => {
  const [activeStates, setActiveStates] = useState(
    Array(room.length).fill(false)
  );

  const handleClick = (index) => {
    const newActiveStates = [...activeStates];
    newActiveStates[index] = !newActiveStates[index];
    setActiveStates(newActiveStates);
  };

  return (
    <>
      <S.All>
        {room.map((el, index) => (
          <S.Box
            key={index}
            className={activeStates[index] ? "active" : ""}
            onClick={() => handleClick(index)}
          >
            {el.roomid}
          </S.Box>
        ))}
      </S.All>
    </>
  );
};
export default WashRoom;
