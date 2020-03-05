import React from 'react'

export default function Checkout(props) {
  if (!props.orders) {
    return <h1>No Orders!</h1>
  }
  return (
    <div>
      {props.orders.map(order => {
        return (
          <ul key={order.id}>
            <li>Order Number: {order.id}</li>
            <li>Order Date: {order.orderDate}</li>
            <li>Customer Name: {order.name}</li>
            <li>Brand: {order.brand}</li>
            <li>Model: {order.model}</li>
            <li>Color: {order.color}</li>
            <li>Size: {order.size}</li>
            <li>Description: {order.description}</li>
            <li>
              <img src={order.image} />
            </li>
            <li>Price: ${order.price}</li>
          </ul>
        )
      })}
    </div>
  )
}
