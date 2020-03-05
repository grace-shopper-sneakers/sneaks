import axios from 'axios'
// ACTION TYPES
const GOT_SINGLE_ORDER = 'GOT_SINGLE_ORDER'
// const REMOVE_ORDER = 'REMOVE_ORDER'
// const NEW_ORDER = 'NEW_ORDER'

// ACTION CREATORS
const gotSingleOrder = order => {
  return {
    type: GOT_SINGLE_ORDER,
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
// const newOrder = order => {
//   return {
//     type: NEW_ORDER,
//     order
//   }
// }

//THUNK
export const getSingleOrderThunk = id => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/orders/${id}`)
      console.log('data in order THUNK', data)
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

// export const newOrderThunk = newOrder => {
//   return async dispatch => {
//     try {
//       const {data} = await axios.post('/api/orders', newOrder)
//       dispatch(newOrder(data))
//     } catch (error) {
//       console.error(error)
//     }
//   }
// }

// INITIAL STATE
const initialState = {}

//ORDER REDUCER
const singleOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_SINGLE_ORDER:
      return action.order
    // case REMOVE_ORDER:
    //   if (state.id === action.id) return {}
    //   else return state
    // case NEW_ORDER:
    //   return action.order
    default:
      return state
  }
}

export default singleOrderReducer
