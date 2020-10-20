import {
  ADD_TO_CART
} from '../actions/actionTypes';

const initialState = {
  items: [],
  count: 0,
  totalPrices: 0
}

function cartReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        menus: action.payload.data
      }
    default:
      return state;
  }
}

export default cartReducer;