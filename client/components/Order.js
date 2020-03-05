import React from 'react'

const Order = props => {
  if (!props.order) {
    return <h1>No orders yet.</h1>
  }
  const {id, createdAt, price, userId} = props.order
  return (
    <div>
      <h2>Order id: {id}</h2>
      <h2>Order Date: {createdAt}</h2>
      <h2>userId: {userId}</h2>
      <h2>Price: ${price}</h2>
      {/* <img src={image} /> */}
    </div>
  )
}

export default Order
