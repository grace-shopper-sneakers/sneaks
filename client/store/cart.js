import axios from 'axios'

const ADD_TO_CART = 'ADD_TO_CART'

const initialState = {
  addedItems: [],
  total: 0
}

// const cartReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TO_CART {
//       let addedItem = //something something, if item.id === action.id

//     }
//   }
// }
