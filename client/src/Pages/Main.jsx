import React from "react";
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import 'Pages/Main.css'

function Main() {
  return (
    <div className="Main">
      <div className="mainContainer">
        <div className="mainButtons">
          <Link to="/join">
            <Button color="primary">Join Bingo</Button>
          </Link>
          <Link to="/create">
            <Button color="primary">Create Bingo</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Main;
