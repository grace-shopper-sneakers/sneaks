import React from 'react'
import {connect} from 'react-redux'

const Order = props => {
  if (!props.order) {
    return <h1>No orders yet.</h1>
  }
  const {order} = props
  const {id, createdAt} = order

  return (
    <div>
      {props.user.isAdmin ? (
        <div>
          <h1>Admin Portal</h1>
          <h1>Order ID: {id}</h1>
          <h2>
            {order.user.firstName} {order.user.lastName}
          </h2>
          <h2>
            {order.user.street}, {order.user.apartmentNumber}
          </h2>
          <h2>
            {order.user.city}, {order.user.zip}
          </h2>
          <h2>{order.user.country}</h2>
          <h2>{order.user.phoneNumber}</h2>
          <hr />
          <h2>Order Date: {createdAt}</h2>
        </div>
      ) : (
        <div>
          <h1>My Orders</h1>
          <h1>Order ID: {id}</h1>
          <h2>
            {props.user.firstName} {props.user.lastName}
          </h2>
          <h2>
            {props.user.street}, {props.user.apartmentNumber}
          </h2>
          <h2>
            {props.user.city}, {props.user.zip}
          </h2>
          <h2>{props.user.country}</h2>
          <h2>{props.user.phoneNumber}</h2>
          <hr />
          <h2>Order Date: {createdAt}</h2>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = state => ({
  order: state.order,
  user: state.user,
  shoes: state.order.shoes,
  cart: state.cart
})

export default connect(mapStateToProps, null)(Order)
