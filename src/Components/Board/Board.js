import React, { useState, useEffect, useCallback } from "react";
import Row from "./Row";
import { autoAddRowCell } from "./method/autoAddRowCell";
import { checkWinner } from "./method/ruleWin";
import { connect } from "react-redux";
import * as actions from "../../Action/action";
import classes from "./Board.module.scss";

const Board = React.memo((props) => {
  const [player, setPlayer] = useState(true);
  const {
    start,
    playerName,
    arraySize,
    setArraySize,
    time,
    setInitBoard,
  } = props;

  useEffect(() => {
    setInitBoard(10);
  }, [setInitBoard]);

  const onClickHandle = useCallback((rowId, cellId) => {
    if (start) {
      if (arraySize[rowId][cellId] === null) {
        const playingName = player === true ? playerName.p1 : playerName.p2;
        const countWinner = checkWinner(arraySize, rowId, cellId, player);
        if (countWinner.length === 5) {
          alert(`winner is: ${playingName} .  Game end in  ${time}`);
          setInitBoard(10);
          return;
        } else if (countWinner.length > 5) {
          alert(`still playing cause ${playingName} check over 5 pieces`);
        }
        setPlayer(!player);
        var update = [...arraySize];
        update[rowId][cellId] = player ? "X" : "O";
        update = autoAddRowCell(arraySize, rowId, cellId);
        setArraySize(update);
        return;
      }
    }
  },[arraySize, player,playerName, setArraySize, setInitBoard, start, time]);

  const rows = arraySize
    ? arraySize.map((res, index) => {
        return (
          <Row
            key={index}
            rowSize={res}
            rowId={index}
            onClickHandle={onClickHandle}
          />
        );
      })
    : null;

  return <div className={classes.Board}>{rows}</div>;
});

const mapStateToProps = (state) => {
  return {
    time: state.time,
    playerName: state.playerName,
    arraySize: state.arraySize,
    start: state.start,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setInitBoard: (size) => dispatch(actions.setInitBoard(size)),
    setArraySize: (update) => dispatch(actions.setArraySize(update)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
