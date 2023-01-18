import React, { useState } from "react";
import "./Grid.css";

let randomNumber = Math.floor(Math.random() * 9);

const Grid = () => {
  const [check, setCheck] = useState(false);
  const [number, setNumber] = useState(null);

  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  const compare = () => {
    // for (let x = 0; x < array.length; x++) {
    //   if (randomNumber === array[x]) {
    //     console.log("matched");
    //   } else {
    //     console.log("not matched");
    //   }
    // }
    if (randomNumber === number) {
      console.log("matched");
      return "Matched";
    } else {
      console.log("un");
      return "Unmatched";
    }
  };

  return (
    <>
      <div className="random_number">{randomNumber}</div>
      <div className="screen_grid">
        {array.map((num) => (
          <div
            className="grid_numbers"
            onClick={() => {
              setCheck(true);
              setNumber(num);
            }}
          >
            {num}
          </div>
        ))}
      </div>
      {check ? compare() : ""}
    </>
  );
};

export default Grid;
