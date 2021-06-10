import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import 'Pages/Bingo.css';
import BingoScreen from "Components/BingoScreen";
import { ENDPOINT } from "Utils/Util";

function Bingo(props) {
  // @ts-ignore
  let { id } = useParams();
  let [texts, setTexts] = useState([])
  
  useEffect(() => {
    let fetchTexts = async () => {
      let response = await fetch(`${ENDPOINT}/api/rooms/${id}`)
      let data = await response.json()

      setTexts(data.texts)
    }

    fetchTexts()
  }, [])

  let user = props?.location?.data?.user || "join"

  return (
    <div className="Main">
      <div className="bingoContainer">
          <BingoScreen user={user} texts={texts} socket={props?.location?.data?.socket}></BingoScreen>
      </div>
    </div>
  );
}

export default Bingo;