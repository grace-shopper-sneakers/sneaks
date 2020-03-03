import React from 'react'
import {connect} from 'react-redux'

import {Redirect} from 'react-router-dom'

const Shoe = props => {
  if (!props.shoe) {
    return <h1>Nice try! There's no shoe here.</h1>
  }
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
