import {
  GET_MENUS
} from '../actions/actionTypes';

const initialState = [ 
  {
    id: 1,
    title: 'Roasted Chicken with Scrambled Egg',
    img: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60',
    category: 'lunch',
    createdBy: 'Kulina',
    rating: 4.5,
    price: 35000
  },
  {
    id: 2,
    title: 'Sweetcorn and Peppercorn Fusilli',
    img: 'https://images.unsplash.com/photo-1526318896980-cf78c088247c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
    category: 'lunch',
    createdBy: 'Kulina',
    rating: 4,
    price: 25000
  },
  {
    id: 3,
    title: 'Mandarine and Vanilla Jam',
    img: 'https://images.unsplash.com/photo-1504387432042-8aca549e4729?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
    category: 'lunch',
    createdBy: 'Kulina',
    rating: 3,
    price: 20000
  },
  {
    id: 4,
    title: 'Original Scrambled Egg',
    img: 'https://images.unsplash.com/photo-1524250981170-bd522ef63fbf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60',
    category: 'lunch',
    createdBy: 'Kulina',
    rating: 3.5,
    price: 18000
  },
  {
    id: 5,
    title: 'Apple Cupcakes',
    img: 'https://images.unsplash.com/photo-1601409751311-cbecfe223af4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60',
    category: 'dinner',
    createdBy: 'Kulina',
    rating: 3.5,
    price: 14000
  }
]

function menuReducer(state = initialState, action) {
  switch(action.type) {
    case GET_MENUS:
      return action.payload.data
    default:
      return state;
  }
}

export default menuReducer;