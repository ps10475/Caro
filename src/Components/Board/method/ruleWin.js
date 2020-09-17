export const checkWinner = (board, rowId, cellId, turn) => {
  let player = turn ? "X" : "O";
  // check row win
  let array_win = [];
  let index = cellId - 1;
  let blockLeft = false;
  while (index >= 0) {
    if (board[rowId][index] === player) {
      array_win.unshift([rowId, index]);
    }
    if (board[rowId][index] !== null && board[rowId][index] !== player) {
      blockLeft = true;
    }
    if (board[rowId][index] === null || board[rowId][index] !== player) {
      break;
    }
    index--;
  }
  index = cellId + 1;
  let blockRight = false;
  while (index <= board[0].length - 1) {
    if (board[rowId][index] === player) {
      array_win.push([rowId, index]);
    }
    if (board[rowId][index] !== null && board[rowId][index] !== player) {
      blockRight = true;
    }
    if (board[rowId][index] === null || board[rowId][index] !== player) {
      break;
    }
    index++;
  }

  if (array_win.length >= 4) {
    if (blockLeft && blockRight) {
      return [];
    }
    array_win.push([rowId, cellId]);
    return array_win;
  }

  // check col
  index = rowId - 1;
  array_win = [];
  let blockTop = false;
  while (index >= 0) {
    if (board[index][cellId] === player) {
      array_win.unshift([index, cellId]);
    }
    if (board[index][cellId] !== null && board[index][cellId] !== player) {
      blockTop = true;
    }
    if (board[index][cellId] === null || board[index][cellId] !== player) {
      break;
    }
    index--;
  }

  index = rowId + 1;
  let blockBottom = false;
  while (index < board.length - 1) {
    if (board[index][cellId] === player) {
      array_win.push([index, cellId]);
    }
    if (board[index][cellId] !== null && board[index][cellId] !== player) {
      blockBottom = true;
    }
    if (board[index][cellId] === null || board[index][cellId] !== player) {
      break;
    }
    index++;
  }

  if (array_win.length >= 4) {
    if (blockTop && blockBottom) {
      return [];
    }
    array_win.push([rowId, cellId]);
    return array_win;
  }

  // check diagonal left top
  let rowId_index = rowId - 1;
  let cellId_index = cellId - 1;
  array_win = [];
  let blockLeftTop = false;
  while (rowId_index >= 0 && cellId_index >= 0) {
    if (board[rowId_index][cellId_index] === player) {
      array_win.push([rowId_index, cellId_index]);
    }
    if (
      board[rowId_index][cellId_index] !== null &&
      board[rowId_index][cellId_index] !== player
    ) {
      blockLeftTop = true;
    }
    if (
      board[rowId_index][cellId_index] === null ||
      board[rowId_index][cellId_index] !== player
    ) {
      break;
    }
    rowId_index--;
    cellId_index--;
  }

  rowId_index = rowId + 1;
  cellId_index = cellId + 1;
  let blockRightBottom = false;
  while (rowId_index <= board.length - 1 && cellId_index <= board.length - 1) {
    if (board[rowId_index][cellId_index] === player) {
      array_win.push([rowId_index, cellId_index]);
    }
    if (
      board[rowId_index][cellId_index] !== null &&
      board[rowId_index][cellId_index] !== player
    ) {
      blockRightBottom = true;
    }
    if (
      board[rowId_index][cellId_index] === null ||
      board[rowId_index][cellId_index] !== player
    ) {
      break;
    }
    rowId_index++;
    cellId_index++;
  }

  if (array_win.length >= 4) { 
    if (blockLeftTop && blockRightBottom) {
      return [];
    }
    array_win.push([rowId, cellId]);
    return array_win;
  }
  // check diagonal right top
  rowId_index = rowId - 1;
  cellId_index = cellId + 1;
  array_win = [];
  let blockRightTop = false;
  while (rowId_index >= 0 && cellId_index <= board.length - 1) {
    if (board[rowId_index][cellId_index] === player) {
      array_win.push([rowId_index, cellId_index]);
    }
    if (
      board[rowId_index][cellId_index] !== null &&
      board[rowId_index][cellId_index] !== player
    ) {
      blockRightTop = true;
    }
    if (
      board[rowId_index][cellId_index] === null ||
      board[rowId_index][cellId_index] !== player
    ) {
      break;
    }
    rowId_index--;
    cellId_index++;
  }

  rowId_index = rowId + 1;
  cellId_index = cellId - 1;
  let blockLeftBottom = false;
  while (rowId_index <= board.length - 1 && cellId_index >= 0) {
    if (board[rowId_index][cellId_index] === player) {
      array_win.push([rowId_index, cellId_index]);
    }
    if (
      board[rowId_index][cellId_index] !== null &&
      board[rowId_index][cellId_index] !== player
    ) {
      blockLeftBottom = true;
    }
    if (
      board[rowId_index][cellId_index] !== player ||
      board[rowId_index][cellId_index] === null
    ) {
      break;
    }
    rowId_index++;
    cellId_index--;
  }

  if (array_win.length >= 4) {
    if (blockLeftBottom && blockRightTop) {
      return [];
    }
    array_win.push([rowId, cellId]);
    return array_win;
  }
  return [];
};
