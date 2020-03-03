import Axios from 'axios'

//action types
const ADD_SHOE = 'ADD_SHOE'
const GET_SHOES = 'GET_SHOES'
const DELETE_SHOE = 'DELETE_SHOE'

//action creators
const gotShoes = shoes => ({
  type: GET_SHOES,
  shoes
})
const addedShoe = shoe => ({
  type: ADD_SHOE,
  shoe
})
const deletedShoe = id => ({
  type: DELETE_SHOE,
  id
})

//thunk creators
export const getShoes = () => async dispatch => {
  try {
    const {data: shoes} = await Axios.get('/api/shoes')
    dispatch(gotShoes(shoes))
  } catch (e) {
    console.error(e)
  }
}
export const addShoe = shoe => async dispatch => {
  try {
    const {data: newShoe} = await Axios.post('/api/shoes', shoe)
    dispatch(addedShoe(newShoe))
  } catch (e) {
    console.error(e)
  }
}
export const deleteShoe = id => async dispatch => {
  try {
    await Axios.delete('api/shoes/' + id)
    dispatch(deletedShoe(id))
  } catch (e) {
    console.error(e)
  }
}

const defaultShoes = []

export default function(state = defaultShoes, action) {
  switch (action.type) {
    case GET_SHOES:
      return action.shoes
    case ADD_SHOE:
      return [...state, action.shoe]
    case DELETE_SHOE:
      return state.filter(shoe => shoe.id !== action.id)
    default:
      return state
  }
}
