import axios from 'axios'
// ACTION TYPES
const GET_ORDERS = 'GET_ORDERS'
const REMOVE_ORDER = 'REMOVE_ORDER'
const NEW_ORDER = 'NEW_ORDER'

// ACTION CREATORS
const gotOrders = orders => {
  return {
    type: GET_ORDERS,
    orders
  }
}
const removedOrder = id => {
  return {
    type: REMOVE_ORDER,
    id
  }
}
const newOrder = order => {
  return {
    type: NEW_ORDER,
    order
  }
}
//THUNK
export const getOrdersThunk = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/orders')
      dispatch(gotOrders(data))
    } catch (error) {
      console.error(error)
    }
  }
}

export const removeOrderThunk = id => {
  return async dispatch => {
    try {
      await axios.delete(`/api/orders/${id}`)
      dispatch(removedOrder(id))
    } catch (error) {
      console.error(error)
    }
  }
}

export const newOrderThunk = order => {
  return async dispatch => {
    try {
      const {data} = await axios.post('/api/orders', order)
      dispatch(newOrder(data))
    } catch (error) {
      console.error(error)
    }
  }
}

// INITIAL STATE
const initialState = []

//ORDERS REDUCER
const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERS:
      return action.orders
    case REMOVE_ORDER:
      return state.filter(order => order.id !== action.id)
    case NEW_ORDER:
      return [...state, action.order]
    default:
      return state
  }
}

export default ordersReducer
