import React from 'react'

const Order = props => {
  if (!props.order) {
    return <h1>No orders yet.</h1>
  }

  const {id, createdAt} = props.order
  const {
    firstName,
    lastName,
    street,
    apartmentNumber,
    city,
    state,
    zip,
    country,
    phoneNumber
  } = props.user
  // const {
  //   size,
  //   brand,
  //   color,
  //   model,
  //   name,
  //   description,
  //   image,
  //   price
  // } = props.shoes
  return (
    <div>
      <h1>Order ID: {id}</h1>
      <h2>
        {firstName} {lastName}
      </h2>
      <h2>
        {street}, {apartmentNumber}
      </h2>
      <h2>
        {city}, {state} {zip}
      </h2>
      <h2>{country}</h2>
      <h2>{phoneNumber}</h2>
      <hr />
      <h2>Order Date: {createdAt}</h2>

      {/* <h3>Name: {name}</h3>
      <h3>Model: {model}</h3>
      <h3>Brand: {brand}</h3>
      <h3>Color: {color}</h3>
      <h3>Size: {size}</h3>
      <h3>Description: {description}</h3>
      <h3>Price: ${price / 100}</h3>
      <img src={image} /> */}
    </div>
  )
}

export default Order
