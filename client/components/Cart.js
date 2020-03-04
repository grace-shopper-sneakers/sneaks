import React from 'react'
import {addItem} from '../store'
import {connect} from 'react-redux'

export const Cart = props => {
  console.log('PROPS', props)
  return (
    <div>
      <h3>Our items</h3>
    </div>
  )
}

const mapStateToProps = state => ({
  cart: state.cart
})

const mapDispatchToProps = dispatch => ({
  addToCart: id => {
    dispatch(addItem(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
