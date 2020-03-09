import axios from 'axios'
// ACTION TYPES
const GET_SINGLE_ORDER = 'GET_SINGLE_ORDER'
// const REMOVE_ORDER = 'REMOVE_ORDER'
const MADE_ORDER = 'MADE_ORDER'

// ACTION CREATORS
const gotSingleOrder = order => {
  return {
    type: GET_SINGLE_ORDER,
    order
  }
}

// for Admin only?
// const removeOrder = orderId => {
//   return {
//     type: REMOVE_ORDER,
//     orderId
//   }
// }
const madeOrder = order => {
  return {
    type: MADE_ORDER,
    order
  }
}

//THUNK
export const getSingleOrderThunk = id => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/orders/${id}`)
      dispatch(gotSingleOrder(data))
    } catch (error) {
      console.error(error)
    }
  }
}

// export const removeOrderThunk = orderId => {
//   return async dispatch => {
//     try {
//       await axios.delete(`/api/orders/${orderId}`)
//       dispatch(removeOrder(orderId))
//     } catch (error) {
//       console.error(error)
//     }
//   }
// }

export const newOrderThunk = newOrder => {
  return async dispatch => {
    try {
      const {data} = await axios.post('/api/orders', newOrder)
      dispatch(madeOrder(data))
    } catch (error) {
      console.error(error)
    }
  }
}

// INITIAL STATE
const initialState = {}

//ORDER REDUCER
const singleOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SINGLE_ORDER:
      return action.order
    // case REMOVE_ORDER:
    //   if (state.id === action.id) return {}
    //   else return state
    case MADE_ORDER:
      return action.order
    default:
      return state
  }
}

export default singleOrderReducer
