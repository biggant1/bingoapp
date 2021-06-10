import React from "react";
import 'Components/BingoScreen.css'
import BingoButton from "Components/BingoButton.jsx";
import { useState } from "react";
import { useParams } from "react-router-dom";

function BingoScreen({user, texts, socket}) {
  // @ts-ignore
  let { id } = useParams();
  let inital = new Array(25).fill(0);
  let [boardState, changeBoard] = useState(inital)

  let handleClick = (e, i) => {
      let newState = [...boardState]
      let newVal = (user === "host") ? 1 : 2
      if(newState[i] === 0) {
        newState[i] = newVal
      }
      else if(newState[i] === newVal) {
        newState[i] = 0
      }
      else if(newState[i] !== 3) {
        newState[i] = 3
      }
      else {
        newState[i] = (newVal === 2) ? 1 : 2
      }
      socket.emit('board update', {id: id, state: newState})
  }

  socket.on('board update', (update) => {
    changeBoard(update)
  })

  return (
      <div className="bingoScreen">
        {boardState.map((value, index) => {
          return <BingoButton key={index} buttonState={value} onClick={(e) => handleClick(e, index)} index={index}>{texts[index]}</BingoButton>
        })}
      </div>
  );
}

export default BingoScreen;