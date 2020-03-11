import React from 'react'
import {connect} from 'react-redux'

const Order = props => {
  if (!props.order.id) {
    return <h1>No orders yet.</h1>
  }
  const {order} = props
  console.log('props', props)
  const {id, createdAt} = order

  return (
    <div>
      {props.user.isAdmin ? (
        <div>
          <h1>Admin Portal</h1>
          <h1>Order ID: {id}</h1>
          <h2>
            {order.user
              ? order.user.firstName + ' ' + order.user.lastName
              : 'guest order'}
          </h2>
          <h2>
            {order.user ? (
              <div>
                {order.user.street}, {order.user.apartmentNumber}
              </div>
            ) : (
              ''
            )}
          </h2>
          <h2>
            {order.user ? (
              <div>
                {order.user.city}, {order.user.zip}
                <h2>{order.user.country}</h2>
                <h2>{order.user.phoneNumber}</h2>
              </div>
            ) : (
              ''
            )}
          </h2>
        </div>
      ) : (
        <div>
          <h1>My Orders</h1>
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
        </div>
      )}
      <hr />
      <h2>Order Date: {createdAt.slice(0, 10)}</h2>
      <h2>
        {order.shoes.map(shoe => {
          return (
            <div key={shoe.id}>
              <h4>{shoe.brand}</h4>
              <h4>model: {shoe.model}</h4>
              <h4>{shoe.color}</h4>
              <h4>size: {shoe.size}</h4>
              <h4>quantity: {shoe.orderShoe.quantity}</h4>
              <h4>${shoe.orderShoe.priceAtPurchase / 100}</h4>
            </div>
          )
        })}
      </h2>
    </div>
  )
}

const mapStateToProps = state => ({
  order: state.order,
  user: state.user
})

export default connect(mapStateToProps, null)(Order)
