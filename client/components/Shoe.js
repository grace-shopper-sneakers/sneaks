import React from 'react'

const Shoe = props => {
  const {brand, color, model} = props.shoe
  return (
    <div>
      <h2>Brand: {brand}</h2>
      <h2>Color: {color}</h2>
      <h2>Model: {model}</h2>
    </div>
  )
}

export default Shoe
