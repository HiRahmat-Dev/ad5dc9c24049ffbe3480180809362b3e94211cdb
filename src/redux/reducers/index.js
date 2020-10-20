import { combineReducers } from 'redux';
import menuReducer from './menus';
import cartReducer from './cart';

export default combineReducers({
  menus: menuReducer,
  cart: cartReducer
})