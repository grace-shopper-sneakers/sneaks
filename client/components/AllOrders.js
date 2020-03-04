import React from 'react'
import {Order} from './index'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {removeOrderThunk} from '../store'

const AllOrders = props => {
  const {user} = props
  return (
    <div>
      {props.orders.length === 0 ? (
        <h1>No Orders</h1>
      ) : (
        props.orders.map(order => (
          <div key={order.id}>
            <Link to={`/orders/${order.id}`}>
              <Order order={order} />
            </Link>
            {user.isAdmin ? (
              <button type="button" onClick={() => props.delete(order.id)}>
                Delete
              </button>
            ) : (
              ''
            )}
          </div>
        ))
      )}
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.user
})
const mapDispatchToProps = dispatch => ({
  delete: id => {
    dispatch(removeOrderThunk(id))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(AllOrders)
