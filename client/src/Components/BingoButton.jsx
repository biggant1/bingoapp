import React from "react";

function BingoButton({onClick, index, buttonState, children}) {
    return (
        <div className="box" id={"box" + index} onClick={onClick}>
            <p className="boxText">{children}</p>
            {
                buttonState === 0 
                ? <div />
                : (buttonState === 1)
                    ? <div className="triangleLeft"/>
                    : (buttonState === 2)
                        ? <div className="triangleRight"/>
                        : [<div className="triangleLeft" key="left"/>,<div className="triangleRight" key="right"/>]
            }
        </div>
    );
}

export default BingoButton;