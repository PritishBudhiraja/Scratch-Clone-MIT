import React, { useState } from "react";
import CatSprite from "../assests/CatSprite.svg";

const Canvas = (props) => {
  const [x, setX] = useState(10);
  const [y, setY] = useState(30);
  const [rotate, setRotate] = useState(0);

  function allowDrop(ev) {
    ev.preventDefault();
  }
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    >
      <button
        onClick={() => {
          // if (x < 300) setX(x + 200);
          // if (y < 600) setY(y + 200);
          // setRotate(rotate - 10);
        }}
      >
        Change coordinates
      </button>
      <div
        style={{
          position: "absolute",
          left: `${x}px`,
          top: `${y}px`,
          transform: `rotate(${rotate}deg)`,
          width: "100px",
          height: "100px",
        }}
        onDragOver={(e) => allowDrop(e)}
      >
        <div>
          {x}:{y}
        </div>
        <img
          id="CatSprite"
          src={CatSprite}
          alt="CatSprite"
          style={{ width: "100%", height: "100%" }}
          draggable="true"
          onDragStart={(event) => drag(event)}
        />
      </div>
    </div>
  );
};

export default Canvas;
