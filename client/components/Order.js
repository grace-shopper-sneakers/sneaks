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
          <h2>Admin Portal</h2>
          <h2>Order ID: {id}</h2>
          <h3>
            {order.user
              ? order.user.firstName + ' ' + order.user.lastName
              : 'guest order'}
          </h3>
          <h3>
            {order.user ? (
              <div>
                {order.user.street}, {order.user.apartmentNumber}
              </div>
            ) : (
              ''
            )}
          </h3>
          <h3>
            {order.user ? (
              <div>
                {order.user.city}, {order.user.zip}
                <h3>{order.user.country}</h3>
                <h3>{order.user.phoneNumber}</h3>
              </div>
            ) : (
              ''
            )}
          </h3>
        </div>
      ) : (
        <div>
          <h2>My Orders</h2>
          <h2>Order ID: {id}</h2>
          <h3>
            {order.user.firstName} {order.user.lastName}
          </h3>
          <h3>
            {order.user.street}, {order.user.apartmentNumber}
          </h3>
          <h3>
            {order.user.city}, {order.user.zip}
          </h3>
          <h3>{order.user.country}</h3>
          <h3>{order.user.phoneNumber}</h3>
        </div>
      )}
      <hr />
      <h3>Order Date: {createdAt.slice(0, 10)}</h3>
      <table>
        <thead>
          <tr>
            <th>Brand</th>
            <th>Model</th>
            <th>Color</th>
            <th>Size</th>
            <th>Quantity</th>
            <th>Price Paid</th>
          </tr>
        </thead>
        <tbody>
          {order.shoes.map(shoe => {
            return (
              <tr key={shoe.id}>
                <td>{shoe.brand}</td>
                <td>{shoe.model}</td>
                <td>{shoe.color}</td>
                <td>{shoe.size}</td>
                <td>{shoe.orderShoe.quantity}</td>
                <td>${shoe.orderShoe.priceAtPurchase / 100}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

const mapStateToProps = state => ({
  order: state.order,
  user: state.user
})

export default connect(mapStateToProps, null)(Order)
