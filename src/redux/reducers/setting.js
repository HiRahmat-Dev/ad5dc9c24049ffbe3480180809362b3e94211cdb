import {
  SET_APP_BAR_HEIGHT,
  SET_APP_SIZE
} from '../actions/actionTypes';

const initialState = {
  appBarHeight: 0,
  appSize: 0
}

function settingsReducer(state = initialState, action) {
  switch(action.type) {
    case SET_APP_BAR_HEIGHT:
      return {
        ...state,
        appBarHeight: action.payload
      }
    case SET_APP_SIZE:
      return {
        ...state,
        appSize: action.payload
      }
    default:
      return state;
  }
}

export default settingsReducer;