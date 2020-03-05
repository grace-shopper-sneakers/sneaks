import React from 'react'

const Order = props => {
  if (!props.order) {
    return <h1>No orders yet.</h1>
  }
  console.log(props)
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
      <h2>userId: {userId}</h2>
      <h2>Price: ${price}</h2>
      <img src={image} />
    </div>
  )
}

export default Order
