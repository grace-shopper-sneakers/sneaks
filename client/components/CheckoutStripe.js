import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import PAYMENT_SERVER_URL from '../constants/server'
import STRIPE_PUBLISHABLE from '../constants/stripe'

const CURRENCY = 'USD'
const fromDollarToCent = amount => amount * 100
const successPayment = data => {
  alert('Payment Successful')
}
const errorPayment = data => {
  alert('Payment Error')
}
const onToken = (amount, description) => token =>
  axios
    .post(PAYMENT_SERVER_URL, {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromDollarToCent(amount)
    })
    .then(successPayment)
    .catch(errorPayment)

// const CheckoutStripe = ({ name, description, amount }) => {

// 	return (
// 		<StripeCheckout
// 			name={name}
// 			description={description}
// 			amount={fromDollarToCent(amount)}
// 			token={onToken(amount, description)}
// 			currency={CURRENCY}
// 			stripeKey={STRIPE_PUBLISHABLE}
// 		/>
// 	);
// };

const CheckoutStripe = props => {
  return (
    <StripeCheckout
      name={`${props.customerInfo.firstName} ${props.customerInfo.lastName}`}
      description={`${props.customerInfo.firstName}'s shoe order`}
      amount={fromDollarToCent(props.cartPrice)}
      token={onToken(
        props.cartPrice,
        `${props.customerInfo.firstName}'s order`
      )}
      currency={CURRENCY}
      stripeKey={STRIPE_PUBLISHABLE}
    />
  )
}

const mapStateToProps = state => ({
  cartPrice: state.cart.shoes.reduce((agg, item) => agg + item.price / 100, 0)
})

export default connect(mapStateToProps, null)(CheckoutStripe)

// const CheckoutStripe = (props) => (
// 	<CheckoutStripe
// 		name={props.firstName}
// 		description={props.lastName}
// 		amount={fromDollarToCent(props.cartPrice)}
// 		token={onToken(props.cartPrice, props.firstName)}
// 		currency={CURRENCY}
// 		stripeKey={STRIPE_PUBLISHABLE}
// 	/>
// );
// export default CheckoutStripe;
