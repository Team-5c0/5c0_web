import React from "react";
import * as S from "./styles";
import { useState } from "react";

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
        {room.map((el, index) => {
          return (
            <>
              <S.Box
              key={el.id}
                className={activeStates[index] ? "active" : ""}
                onClick={() => handleClick(index)}
              >
                {el.id}
              </S.Box>
            </>
          );
        })}
      </S.All>
    </>
  );
};
export default WashRoom;
