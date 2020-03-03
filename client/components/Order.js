import React from 'react'

const Order = props => {
  console.log('Order Card', props)
  const {
    orderId,
    orderDate,
    size,
    brand,
    color,
    model,
    name,
    description,
    image,
    price,
    userId
  } = props.order
  return (
    <div>
      <h2>OrderId: {orderId}</h2>
      <h2>Order Date: {orderDate}</h2>
      <h2>Size: {size}</h2>
      <h2>Brand: {brand}</h2>
      <h2>Color: {color}</h2>
      <h2>Model: {model}</h2>
      <h2>Name: {name}</h2>
      <h2>Description: {description}</h2>
      <h2>Pics: {image}</h2>
      <h2>userId: {userId}</h2>
      <h2>Price: {price}</h2>
    </div>
  )
}

export default Order
