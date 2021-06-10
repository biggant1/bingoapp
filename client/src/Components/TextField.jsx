import React from "react";
import 'Components/TextField.css'

function TextField({placeholder, onSubmit}) {
  return (
    <div className="textField">
        <form onSubmit={onSubmit}>
            <input placeholder={placeholder} />
        </form>
    </div>
  );
}

export default TextField;