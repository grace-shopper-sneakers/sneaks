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

    //not logged in.
    if (response.data.status === 404) {
      //no cart found on local storage
      //cart found on frontend storage
      if (sessionStorage.cart === 'empty') {
        //case if first item in session storage
        sessionStorage.setItem('cart', shoeId)
      } else {
        const splitShoes = sessionStorage.getItem('cart').split(',')
        splitShoes.push(shoeId)
        sessionStorage.setItem('cart', splitShoes)
      }
      dispatch(addedShoe(shoeId))
    } else {
      dispatch(addedShoe(response.data))
    }
  } catch (error) {
    console.error(error)
  }
}

export const getUserCart = () => async dispatch => {
  try {
    const response = await axios.get('/api/cart')
    //guest check
    if (response.data.status === 404) {
      //no cart found on local storage
      if (!sessionStorage.getItem('cart')) {
        sessionStorage.setItem('cart', 'empty')
        dispatch(gotCart([]))
      } else if (sessionStorage.cart === 'empty') {
        //cart found on frontend storage
        dispatch(gotCart([]))
      } else {
        const splitShoes = sessionStorage.getItem('cart').split(',')
        const mappedShoes = splitShoes.map(shoeId => parseInt(shoeId, 10))
        dispatch(gotCart(mappedShoes))
      }
    } else {
      dispatch(gotCart(response.data))
    }
  } catch (error) {
    console.error(error)
  }
}

export const removeFromCart = id => async dispatch => {
  try {
    //using frontend storage?
    if (sessionStorage.getItem('using') === 'false') {
      await axios.put(`/api/cart/shoes/${id}`)
    } else {
      const splitShoes = sessionStorage.getItem('cart').split(',')
      const mappedShoes = splitShoes.filter(shoeId => shoeId !== `${id}`)
      sessionStorage.setItem('cart', mappedShoes)
      console.log('replaced shoes', mappedShoes)
    }

    dispatch(removedShoe(id))
  } catch (error) {
    console.error(error)
  }
}
export const checkout = () => async dispatch => {
  try {
    const splitShoes = sessionStorage.getItem('cart').split(',')
    const mappedShoes = splitShoes.map(shoeId => {
      parseInt(shoeId, 10)
    })
    const {data: newOrder} = await axios.put('/api/cart/checkout', mappedShoes)

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
