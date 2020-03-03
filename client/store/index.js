import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import shoe from './shoe'
import shoes from './shoes'
import ordersReducer from './orders'
import singleOrderReducer from './order'

const reducer = combineReducers({
  user,
  shoe,
  shoes,
  orders: ordersReducer,
  order: singleOrderReducer
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './shoes'
export * from './orders'
export * from './order'
export * from './shoe'
