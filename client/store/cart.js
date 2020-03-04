import axios from 'axios'

export const ADD_SHOE = 'ADD_SHOE'
// const DELETE_SHOE = 'DELETE_SHOE';

export const addedItem = shoe => ({
  type: ADD_SHOE,
  shoe
})

export const addItem = id => async dispatch => {
  try {
    const {data} = await axios.get(`api/shoes/${id}`)
    dispatch(addedItem(data))
  } catch (error) {
    console.error(error)
  }
}

export const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_SHOE:
      return [...state, action.shoe]
    default:
      return state
  }
}

export default cartReducer

// const cartReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TO_CART {
//       let addedItem = //something something, if item.id === action.id

//     }
//   }
// }
