import React from 'react'
import {Cart, ShippingForm} from './index'
import {connect} from 'react-redux'

const CheckoutPage = props => {
  return (
    <div className="checkout-page">
      <h1>Your cart:</h1>
      <Cart />
      <h2>Total price: ${props.cartPrice}</h2>
      <ShippingForm />
    </div>
  )
}
const mapStateToProps = state => ({
  cartPrice: state.cart.reduce((agg, item) => agg + item.price, 0)
})

export default connect(mapStateToProps)(CheckoutPage)
