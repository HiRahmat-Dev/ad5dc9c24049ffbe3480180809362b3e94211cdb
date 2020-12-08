import { combineReducers } from 'redux';
import menuReducer from './menus';
import cartReducer from './cart';
import settingsReducer from './setting';
import modalReducer from './modal';
import locationReducer from './location';

export default combineReducers({
  menus: menuReducer,
  cart: cartReducer,
  settings: settingsReducer,
  modal: modalReducer,
  locations: locationReducer
})