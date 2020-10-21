import {
  GET_MENUS,
  SET_ITEMS
} from './actionTypes';

export const getMenus = data => ({
  type: GET_MENUS,
  payload: data
})

export const setItems = data => ({
  type: SET_ITEMS,
  payload: data
})