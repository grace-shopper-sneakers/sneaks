import axios from 'axios'
import {newOrderThunk} from './index'
export const ADD_SHOE_TO_CART = 'ADD_SHOE_TO_CART'
export const GET_USER_CART = 'GET_USER_CART'
export const REMOVE_FROM_CART = 'DELETE_FROM_CART'
export const CHECKOUT = 'CHECKOUT'

export const addedShoe = id => ({
  type: ADD_SHOE_TO_CART,
  id
})

export const gotCart = cart => ({
  type: GET_USER_CART,
  cart
})

export const removedShoe = id => ({
  type: REMOVE_FROM_CART,
  id
})
export const checkedOut = () => ({
  type: CHECKOUT
})

export const addShoeToCart = shoeId => async dispatch => {
  try {
    const response = await axios.put(`/api/cart/`, {id: shoeId})
    dispatch(addedShoe(response.data))
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
    await axios.put(`/api/cart/shoes/${id}`)
    dispatch(removedShoe(id))
  } catch (error) {
    console.error(error)
  }
}
export const checkout = () => async dispatch => {
  try {
    const {data: newOrder} = await axios.delete('/api/cart/checkout')

    //clear cart in redux
    dispatch(checkedOut())

    dispatch(newOrderThunk(newOrder))
  } catch (e) {
    console.error(e)
  }
}

//array of shoeIds
const initialState = []
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SHOE_TO_CART:
      return [...state, action.id]
    case GET_USER_CART:
      return action.cart
    case REMOVE_FROM_CART:
      return state.filter(shoe => shoe !== action.id)
    case CHECKOUT:
      return []
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
