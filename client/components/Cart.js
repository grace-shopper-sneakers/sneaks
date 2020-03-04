import React from 'react'
import {addShoeToCart, getUserCart} from '../store'
import {connect} from 'react-redux'
import Shoe from './Shoe'

export const Cart = props => {
  return <div>{props.cart.map(shoe => <Shoe key={shoe.id} shoe={shoe} />)}</div>
}

const mapStateToProps = state => ({
  cart: state.cart
})

const mapDispatchToProps = dispatch => ({
  addToCart: shoe => {
    dispatch(addShoeToCart(shoe))
  },
  getCart: () => {
    dispatch(getUserCart())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
