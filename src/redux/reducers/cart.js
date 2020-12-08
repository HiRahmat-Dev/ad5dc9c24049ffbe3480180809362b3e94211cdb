import {
  SET_ITEMS,
} from '../actions/actionTypes';

const initialState = {
  items: [],
  count: 0,
  totalPrices: 0,
  postalFee: true
}

function cartReducer(state = initialState, action) {
  switch(action.type) {
    case SET_ITEMS:

      let data = [...state.items, action.payload]
      return {
        ...state,
        items: data,
        count: data.length,
        totalPrices: data.reduce((total, value) => {
          return total + value.price;
        }, 0)
      }
    default:
      return state;
  }
}

export default cartReducer;