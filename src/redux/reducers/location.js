import {
  GET_LOCATION,
  SET_FILTERED_LOCATION,
  SET_SELECTED_LOCATION
} from '../actions/actionTypes';

const initialState = {
  data: [ 
    {
      id: 1,
      title: 'Kulina',
      location: 'Jalan Tulodong Atas 28, Senayan, Kebayoran Baru'
    },
    {
      id: 2,
      title: 'Pancoran Riverside Apartment',
      location: 'RT.6/RW.1, Pangadegan, Pancoran, South Jakarta'
    },
    {
      id: 3,
      title: 'Mandarine and Vanilla Jam',
      location: 'Jalan Tulodong Atas 28, Senayan, Kebayoran Baru'
    },
    {
      id: 4,
      title: 'Block 71 Jakarta',
      location: 'RT.6/RW.1, Pangadegan, Pancoran, South Jakarta'
    },
    {
      id: 5,
      title: 'Tangerang',
      location: 'Jalan Tulodong Atas 28, Senayan, Kebayoran Baru'
    },
    {
      id: 6,
      title: 'Bandung',
      location: 'RT.6/RW.1, Pangadegan, Pancoran, South Jakarta'
    },
    {
      id: 7,
      title: 'Tasikmalaya',
      location: 'RT.6/RW.1, Pangadegan, Pancoran, South Jakarta'
    },
    {
      id: 8,
      title: 'Tokopedia',
      location: 'RT.6/RW.1, Pangadegan, Pancoran, South Jakarta'
    },
    {
      id: 9,
      title: 'Tangerang Selatan',
      location: 'Jalan Tulodong Atas 28, Senayan, Kebayoran Baru'
    },
  ],
  filtered: [],
  selected: {}
}

function locationReducer(state = initialState, action) {
  switch(action.type) {
    case GET_LOCATION:
      return {
        ...state,
        data: action.payload
      }
    case SET_FILTERED_LOCATION:
      return {
        ...state,
        filtered: action.payload
      }
    case SET_SELECTED_LOCATION:
      return {
        ...state,
        selected: action.payload
      }
    default:
      return state;
  }
}

export default locationReducer;