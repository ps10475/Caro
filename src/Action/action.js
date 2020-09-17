import * as actionTypes from './actionTypes';

export const setStart = ()=>{
  return dispatch => {
    dispatch({
      type: actionTypes.SET_START
    })
  }
}

export const setTimeRedux = (time) => {
  return (dispatch) => {
    time = 1200 - time;
    let m = Math.floor(time/60);
    let s = time%60;
    time = `${m} m ${s} s`;
    dispatch({
      type: actionTypes.SET_TIME,
      time: time,
    });
  };
};

export const setPlayerName = (name) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.SET_NAME_PLAYER,
      name: name
    })
  }
}

export const setInitBoard = (size) => {
  return(dispatch) => {
    let arraySize = Array(size).fill(null).map(() => Array(size).fill(null));
    dispatch({
      type: actionTypes.SET_INIT_BOARD,
      arraySize : arraySize
    })
  }
}
export const setArraySize = (update) => {
  return dispatch => {
    dispatch({
      type: actionTypes.SET_UPDATE_BOARD,
      update: update
    })
  }
}


