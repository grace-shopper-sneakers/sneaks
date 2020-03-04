import axios from 'axios'

export const ADD_SHOE_TO_CART = 'ADD_SHOE_TO_CART'

export const GET_USER_CART = 'GET_USER_CART'

export const REMOVE_FROM_CART = 'DELETE_FROM_CART'

export const addedShoe = shoe => ({
  type: ADD_SHOE_TO_CART,
  shoe
})

export const gotCart = cart => ({
  type: GET_USER_CART,
  cart
})

export const removedShoe = id => ({
  type: REMOVE_FROM_CART,
  id
})

export const addShoeToCart = shoe => async dispatch => {
  try {
    const {data} = await axios.put(`/api/cart/`, shoe)
    dispatch(addedShoe(data))
  } catch (error) {
    console.error(error)
  }
}

export const getUserCart = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/cart')
    dispatch(gotCart(data))
  } catch (error) {
    console.error(error)
  }
}

export const removeFromCart = id => async dispatch => {
  try {
    const {data} = await axios.delete(`/api/cart/${id}`)
    dispatch(removedShoe(id))
  } catch (error) {
    console.error(error)
  }
}

export const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_SHOE_TO_CART:
      return [...state, action.shoe]
    case GET_USER_CART:
      return action.cart
    case REMOVE_FROM_CART:
      return state.filter(shoe => {
        return shoe.id !== action.id
      })
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
