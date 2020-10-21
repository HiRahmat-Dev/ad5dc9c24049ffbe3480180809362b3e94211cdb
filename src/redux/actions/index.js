import {
  GET_LOCATION,
  GET_MENUS,
  SET_APP_BAR_HEIGHT,
  SET_APP_SIZE,
  SET_FILTERED_LOCATION,
  SET_ITEMS,
  SET_SELECTED_LOCATION,
  TOGGLE_MODAL
} from './actionTypes';

export const getMenus = data => ({
  type: GET_MENUS,
  payload: data
})

export const setItems = data => ({
  type: SET_ITEMS,
  payload: data
})

export const setAppBarHeight = data => ({
  type: SET_APP_BAR_HEIGHT,
  payload: data
})

export const setAppSize = data => ({
  type: SET_APP_SIZE,
  payload: data
})

export const toggleModal = data => ({
  type: TOGGLE_MODAL,
  payload: data
})

export const getLocation = data => ({
  type: GET_LOCATION,
  payload: data
})

export const setSelectedLocation = data => ({
  type: SET_SELECTED_LOCATION,
  payload: data
})

export const setFilteredLocation = data => ({
  type: SET_FILTERED_LOCATION,
  payload: data
})