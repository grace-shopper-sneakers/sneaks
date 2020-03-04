import React from 'react'
import {addShoeToCart, getUserCart, removeFromCart} from '../store'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Shoe from './Shoe'

export const Cart = props => {
  return (
    <div>
      {props.cart.map(shoe => (
        <div key={shoe.id}>
          <Shoe shoe={shoe} />
          <button type="button" onClick={() => props.removeFromCart(shoe.id)}>
            Remove from Cart
          </button>
        </div>
      ))}
      <Link to="/checkout">
        <button type="button">Checkout</button>
      </Link>
    </div>
  )
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
  },
  removeFromCart: id => {
    dispatch(removeFromCart(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
