import * as actionTypes from '../Action/actionTypes'

const initState = {
    time: null,
    playerName: null,
    arraySize: null,
    start: false
}

const reducer = (state = initState, action)=>{
    switch(action.type){
        case actionTypes.SET_START:{
            return {...state, start: true}
        }
        case actionTypes.SET_TIME:{ 
            return {...state, time:action.time}
        }
        case actionTypes.SET_NAME_PLAYER: {
            return {...state, playerName: action.name}
        }
        case actionTypes.SET_INIT_BOARD: {
            return {...state, arraySize: action.arraySize, start: false }
        }
        case actionTypes.SET_UPDATE_BOARD:{
            return {...state, arraySize: action.update}
        }
        default: return state
    }
}
export default reducer