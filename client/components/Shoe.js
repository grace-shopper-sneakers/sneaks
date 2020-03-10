import React from 'react'

const Shoe = props => {
  if (!props.shoe) {
    return <h1>Nice try! There's no shoe here.</h1>
  }
  const {brand, color, model, price} = props.shoe

  return (
    <div>
      <img
        src="https://allbirds-res.cloudinary.com/image/fetch/q_auto,f_auto/w_1000,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/Allbirds_M_Wool_Runner_Kotare_GREY_ANGLE_d5ff3b96-7251-4c1e-9ba8-c711434cc10d.png?v=1571655678"
        className="shoe-image"
      />
      <h5 className="center">{model}</h5>
      <h6 className="center">Brand: {brand}</h6>
      <h6 className="center">Color: {color}</h6>
      <h6 className="center">${price / 100}</h6>
    </div>
  )
}

export default Shoe
