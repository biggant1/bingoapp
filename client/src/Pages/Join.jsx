import React from "react";
import TextField from "Components/TextField";
import 'Pages/Join.css'
import { ENDPOINT } from "Utils/Util";
import socketIOClient from "socket.io-client";

function Join(props) {
  let joinBingo = (e) => {
    e.preventDefault()
    let text = e.target[0].value;
    if(!/[A-Z]{5}/.test(text)) return;
    const socket = socketIOClient(ENDPOINT);
    socket.emit('join room', text)
    props.history.push({pathname: `/bingo/${text}`, data: {user: 'join', socket: socket}})
  }

  return (
    <div className="Main">
      <div className="mainContainer">
        <div className="Join">
            <h1 id="inputCode">Input Bingo Code:</h1>
            <TextField onSubmit={joinBingo} placeholder="XSDFG"></TextField>
        </div>
      </div>
    </div>
  );
}

export default Join;