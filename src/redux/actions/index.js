import {
  GET_MENUS,
  ADD_TO_CART
} from './actionTypes';

export const getMenus = data => ({
  type: GET_MENUS,
  payload: data
})

export const addToCart = data => ({
  type: ADD_TO_CART,
  payload: data
})