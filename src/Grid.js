import React, { useState } from "react";
import "./Grid.css";

let randomNumber = Math.floor(Math.random() * 9);

const Grid = () => {
  const [check, setCheck] = useState(false);
  const [number, setNumber] = useState(null);
  const [count, setCount] = useState(0);
  const [disable, setDisable] = useState(false);

  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  const compare = () => {
    if (randomNumber === number) {
      console.log("matched");
      return "Winner";
    } else {
      console.log("unmatched");
      return "wrong";
    }
  };

  const endOfChance = () => {
    if (count === 3 || randomNumber === number) {
      console.log("game over");
      return "game over";
    } else {
      console.log("continue");
      // return "continue";
    }
  };

  return (
    <>
      <div className="random_number">{randomNumber}</div>
      <div className="screen_grid">
        {array.map((num) => (
          <button
            key={num}
            className="grid_numbers"
            onClick={() => {
              setCheck(true);
              setNumber(num);
              setCount((c) => c + 1);
              setDisable(() => (randomNumber === num ? true : false));
              console.log(num);
            }}
            disabled={disable}
          >
            {num}
          </button>
        ))}
      </div>
      {endOfChance()}

      <br></br>

      {check ? compare() : ""}
    </>
  );
};

export default Grid;
