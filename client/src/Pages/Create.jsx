import React, { useState } from "react";
import { Button, TextField } from '@material-ui/core';
import socketIOClient from "socket.io-client";
import 'Pages/Create.css'
import { ENDPOINT } from "Utils/Util";

function Create(props) {
  let [text, changeText] = useState("")

  let createRoom = async () => {
    const socket = socketIOClient(ENDPOINT);
    let textArr = text.split(',').map(t => t.trim())
    if(textArr.length !== 25) return;
    textArr.sort(() => Math.random() - 0.5)

    socket.on('room created', id => {
      props.history.push({pathname: `/bingo/${id}`, data: {user: 'host', socket: socket}})
    })

    socket.emit('create room', {texts: textArr})
  }

  return (
    <div className="Main">
      <div className="mainContainer">
        <div className="Create">
          <h1>Bingo Text (Separated by commas)</h1>
          <TextField
            id="filled-multiline-static"
            multiline
            rows={5}
            placeholder="List of bingo"
            variant="standard"
            style={{width: "100%", marginBottom: "25%"}}
            onChange={e => changeText(e.target.value)}
          />
          <Button color="primary" onClick={createRoom}>Create Room</Button>
        </div>
      </div>
    </div>
  );
}

export default Create;