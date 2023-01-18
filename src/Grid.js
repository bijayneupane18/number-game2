import React from "react";
import "./Grid.css";

const Grid = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <div className="screen_grid">
        {array.map((num) => (
          <div className="grid_numbers">{num}</div>
        ))}
      </div>
    </>
  );
};

export default Grid;
