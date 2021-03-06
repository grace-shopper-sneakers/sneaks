import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'

const handleToken = async token => {
  console.log('TOKEN', token)

  const res = await axios.post('/api/payment', token)

  const {status} = res.data

  console.log(res)

  if (status === '200') {
    console.log('success!')
  } else {
    console.log('something went wrong')
  }
}

const CheckoutStripe = props => {
  return (
    <div>
      <StripeCheckout
        stripeKey="pk_test_EfbfrACdRLAn8tagUY0zXs0k00qDhWTGHy"
        token={handleToken}
        billingAddress
        shippingAddress
        amount={props.cartPrice * 100}
      />
    </div>
  )
}

const mapStateToProps = state => ({
  // cartPrice: state.cart.reduce((agg, item) => agg + item.price / 100, 0)
  cartPrice: state.cart.reduce((agg, shoeId) => {
    if (state.shoes.length > 0) {
      return agg + state.shoes.find(shoe => shoe.id === shoeId, 0).price / 100
    }
  }, 0)
})

export default connect(mapStateToProps, null)(CheckoutStripe)

// import PAYMENT_SERVER_URL from '../constants/server';
// import STRIPE_PUBLISHABLE from '../constants/stripe';

// const CURRENCY = 'USD';
// const fromDollarToCent = (amount) => amount * 100;
// const successPayment = (data) => {
// 	alert('Payment Successful');
// };
// const errorPayment = (data) => {
// 	alert('Payment Error');
// };
// const onToken = (amount, description) => (token) =>  { return (
//   console.log(token),

// axios.post('http://localhost:8000/api/payment', {
// 		description,
// 		source: token.id,
// 		currency: CURRENCY,
// 		amount: fromDollarToCent(amount)
// 	})
// 	.then(successPayment)
//   .catch(errorPayment);
// )}

// // const CheckoutStripe = ({ name, description, amount }) => {

// // 	return (
// // 		<StripeCheckout
// // 			name={name}
// // 			description={description}
// // 			amount={fromDollarToCent(amount)}
// // token={onToken(amount, description)}
// // 			currency={CURRENCY}
// // 			stripeKey={STRIPE_PUBLISHABLE}
// // 		/>
// // 	);
// // };

// const CheckoutStripe = (props) => {
// 	return (
// 		<StripeCheckout
// 			// name={`${props.customerInfo.firstName} ${props.customerInfo.lastName}`}
// 			// description={`${props.customerInfo.firstName}'s shoe order`}
// 			amount={fromDollarToCent(props.cartPrice)}
// 			token={onToken(props.cartPrice, 'description')}
// 			currency={CURRENCY}
// 			stripeKey={STRIPE_PUBLISHABLE}
// 		/>
// 	);
// };

// // const CheckoutStripe = (props) => (
// // 	<CheckoutStripe
// // 		name={props.firstName}
// // 		description={props.lastName}
// // 		amount={fromDollarToCent(props.cartPrice)}
// // 		token={onToken(props.cartPrice, props.firstName)}
// // 		currency={CURRENCY}
// // 		stripeKey={STRIPE_PUBLISHABLE}
// // 	/>
// // );
