import Axios from 'axios'

//action types
const GET_SHOE = 'GET_SHOE'

//action creators
const gotShoe = shoe => ({
  type: GET_SHOE,
  shoe
})

//thunk creators
export const getShoe = id => async dispatch => {
  const {data: shoe} = await Axios.get('/api/shoes/' + id)
  dispatch(gotShoe(shoe))
}

const defaultShoe = {}

export default function(state = defaultShoe, action) {
  switch (action.type) {
    case GET_SHOE:
      return action.shoe
    default:
      return state
  }
}
