import React from 'react'
import {connect} from 'react-redux'

import {Redirect} from 'react-router-dom'

const Shoe = props => {
  if (!props.shoe) {
    return <h1>Nice try! There's no shoe here.</h1>
  }
  const {brand, color, model, price} = props.shoe

  return (
    <div>
      <p>{model}</p>
      <h2>{brand}</h2>
      <h2>{color}</h2>
      <h2>${price}</h2>
      <img
        src="https://allbirds-res.cloudinary.com/image/fetch/q_auto,f_auto/w_1000,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/Allbirds_M_Wool_Runner_Kotare_GREY_ANGLE_d5ff3b96-7251-4c1e-9ba8-c711434cc10d.png?v=1571655678"
        className="shoe-image"
      />
    </div>
  )
}

export default Shoe
