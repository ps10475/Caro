import React from "react";
import Cell from "./Cell";

const Row = React.memo((props) => {
  const { rowSize, rowId, onClickHandle } = props;
  const cells = rowSize.map((res, index) => {
    return (
      <Cell
        key={index}
        rowId={rowId}
        cellId={index}
        value={res}
        onClickHandle={onClickHandle}
        
      />
    );
  });
  return <div style={{display:'block',height:'50px'}}>{cells} </div>;
});

export default Row;
