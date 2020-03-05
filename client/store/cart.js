import axios from 'axios'
import {newOrderThunk} from './index'
export const ADD_SHOE_TO_CART = 'ADD_SHOE_TO_CART'
export const GET_USER_CART = 'GET_USER_CART'
export const REMOVE_FROM_CART = 'DELETE_FROM_CART'
export const CHECKOUT = 'CHECKOUT'

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
export const checkedOut = () => ({
  type: CHECKOUT
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
    await axios.delete(`/api/cart/${id}`)
    dispatch(removedShoe(id))
  } catch (error) {
    console.error(error)
  }
}
export const checkout = () => async dispatch => {
  try {
    const {data: oldCart} = await axios.delete('/api/cart/checkout')
    const orderDate = Date.now()
    const orderId = Math.floor(Math.random() * 100)
    dispatch(checkedOut())
    oldCart.forEach(shoe => {
      const {model, color, brand, price, size} = shoe
      const order = {model, color, brand, price, orderDate, orderId, size}
      return dispatch(newOrderThunk(order))
    })
  } catch (e) {
    console.error(e)
  }
}

export const cartReducer = (state = {shoes: []}, action) => {
  switch (action.type) {
    case ADD_SHOE_TO_CART:
      return {...state, shoes: [...state.shoes, action.shoe]}
    case GET_USER_CART:
      return action.cart
    case REMOVE_FROM_CART:
      return {
        ...state,
        shoes: state.shoes.filter(shoe => shoe.id !== action.id)
      }
    case CHECKOUT:
      return {...state, shoes: []}
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
