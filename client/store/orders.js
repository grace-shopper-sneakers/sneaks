import axios from 'axios'
// ACTION TYPES
const GOT_ORDERS = 'GOT_ORDERS'
const REMOVE_ORDER = 'REMOVE_ORDER'
const NEW_ORDER = 'NEW_ORDER'

// ACTION CREATORS
const gotOrders = orders => {
  return {
    type: GOT_ORDERS,
    orders
  }
}
const removeOrder = orderId => {
  return {
    type: REMOVE_ORDER,
    orderId
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

export const removeOrderThunk = orderId => {
  return async dispatch => {
    try {
      await axios.delete(`/api/orders/${orderId}`)
      dispatch(removeOrder(orderId))
    } catch (error) {
      console.error(error)
    }
  }
}

export const newOrderThunk = newOrder => {
  return async dispatch => {
    try {
      const {data} = await axios.post('/api/orders', newOrder)
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
  console.log('ORDERS REDUCER', state)
  switch (action.type) {
    case GOT_ORDERS:
      return action.orders

    case REMOVE_ORDER:
      return state.filter(order => orderId !== action.order.id)
    case NEW_ORDER:
      return {...state, orders: [...orders, action.orders]}
    default:
      return state
  }
}

export default ordersReducer
