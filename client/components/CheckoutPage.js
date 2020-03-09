import React from 'react'
import {Cart, ShippingForm} from './index'
import {connect} from 'react-redux'
import {checkout} from '../store'

const CheckoutPage = props => {
  return (
    <div className="checkout-page">
      <h1>Your cart:</h1>
      <Cart />
      <h2>Total price: ${props.cartPrice}</h2>
      <ShippingForm checkout={props.checkout} cartPrice={props.cartPrice} />
    </div>
  )
}
const mapStateToProps = state => ({
  cartPrice: state.cart.shoes.reduce((agg, item) => agg + item.price / 100, 0)
})
const mapDispatchToProps = dispatch => ({
  checkout: () => dispatch(checkout())
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage)
