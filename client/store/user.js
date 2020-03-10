import axios from 'axios'
import history from '../history'
import {checkedOut} from './cart'
/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'
const EDIT_USER = 'EDIT_USER'
/**
 * INITIAL STATE
 */
const defaultUser = {}

/**
 * ACTION CREATORS
 */
const gotUser = user => ({type: GET_USER, user})
const removedUser = () => ({type: REMOVE_USER})
const editedUser = user => ({type: EDIT_USER, user})
/**
 * THUNK CREATORS
 */
export const me = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me')
    if (res.data) {
      sessionStorage.setItem('using', false)
    } else {
      sessionStorage.setItem('using', true)
    }
    dispatch(gotUser(res.data || defaultUser))
  } catch (err) {
    console.error(err)
  }
}

export const auth = (email, password, method) => async dispatch => {
  let res
  const items = {email, password}
  try {
    if (method === 'signup') {
      if (sessionStorage.cart !== '' && sessionStorage.cart !== 'empty') {
        const mapShoes = sessionStorage.cart
          .split(',')
          .map(shoeId => parseInt(shoeId, 10))
        items.shoes = mapShoes
      }
    }
    sessionStorage.clear()
    dispatch(checkedOut())
    res = await axios.post(`/auth/${method}`, items)
  } catch (authError) {
    return dispatch(gotUser({error: authError}))
  }

  try {
    dispatch(gotUser(res.data))
    history.push('/home')
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export const logout = () => async dispatch => {
  try {
    await axios.post('/auth/logout')
    dispatch(removedUser())
    sessionStorage.setItem('using', 'true')
    history.push('/login')
  } catch (err) {
    console.error(err)
  }
}

export const editUser = (user, userId) => async dispatch => {
  try {
    const {data} = await axios.put(`/api/users/${userId}`, user)
    dispatch(editedUser(data))
  } catch (error) {
    console.error(error)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    case REMOVE_USER:
      return defaultUser
    case EDIT_USER:
      return action.user
    default:
      return state
  }
}
