import React from "react";
import classes from "./Board.module.scss";

const Cell = React.memo((props) => {
  const { rowId, cellId, value, onClickHandle } = props;

  let color = value === "X" ? "text-primary" : "text-danger";

  return (
    <button
      className={color + " " + classes.Cell}
      onClick={() => onClickHandle(rowId, cellId)}
    >
      {value}
    </button>
  );
});

export default Cell;
