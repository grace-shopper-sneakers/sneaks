import axios from 'axios'

// ACTION TYPES
const ADMIN_GET_ALL_USERS = 'ADMIN_GET_ALL_USERS'
const ADMIN_GET_USER = 'ADMIN_GET_USER'
const ADMIN_EDIT_USER = 'ADMIN_EDIT_USER'
const ADMIN_DELETE_USER = 'ADMIN_DELETE_USER'

// ACTION CREATORS
const gotAllUsers = adminUsers => ({
  type: ADMIN_GET_ALL_USERS,
  adminUsers
})
const gotUser = adminUser => ({
  type: ADMIN_GET_USER,
  adminUser
})
const editedUser = adminUser => ({
  type: ADMIN_EDIT_USER,
  adminUser
})
const deletedUser = id => ({
  type: ADMIN_DELETE_USER,
  id
})

// THUNKS
export const adminGetAllUsers = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/users/')
    dispatch(gotAllUsers(data))
  } catch (error) {
    console.error(error)
  }
}
export const adminGetUser = id => async dispatch => {
  try {
    const {data} = await axios.get(`/api/users/${id}`)
    dispatch(gotUser(data))
  } catch (error) {
    console.error(error)
  }
}
export const adminEditUser = (adminUser, adminUserId) => async dispatch => {
  try {
    const {data} = await axios.put(`/api/users/${adminUserId}`, adminUser)
    dispatch(editedUser(data))
  } catch (error) {
    console.error(error)
  }
}
export const adminDeleteUser = id => async dispatch => {
  try {
    await axios.delete(`api/users/${id}`)
    dispatch(deletedUser(id))
  } catch (error) {
    console.error(error)
  }
}

// INITIAL STATE
const initialState = []

// REDUCER
const adminUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_GET_ALL_USERS:
      return action.adminUsers
    case ADMIN_GET_USER:
      return state.filter(adminUser => adminUser.id === action.id)
    case ADMIN_EDIT_USER:
      return state.filter(adminUser => adminUser.id === action.adminUserId)
    case ADMIN_DELETE_USER:
      return state.filter(adminUser => adminUser.id !== action.id)
    default:
      return state
  }
}

export default adminUsersReducer
