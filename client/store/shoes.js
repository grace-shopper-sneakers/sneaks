import Axios from 'axios'

//action types
const GET_SHOES = 'GET_SHOES'

//action creators
const gotShoes = shoes => ({
  type: GET_SHOES,
  shoes
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

const defaultShoes = []

export default function(state = defaultShoes, action) {
  switch (action.type) {
    case GET_SHOES:
      return action.shoes
    default:
      return state
  }
}
