import React from 'react'
import Order from './Order'
import {connect} from 'react-redux'
import {getSingleOrderThunk, removeOrderThunk} from '../store'
import AllOrders from './AllOrders'
import AllShoes from './AllShoes'

class SingleOrder extends React.Component {
  componentDidMount() {
    this.props.getOrder(this.props.match.params.id)
  }
  render() {
    return (
      <div>
        <Order />
        {/* <Order order={this.props.order} shoes={this.props.shoes} /> */}
        <AllShoes shoes={this.props.cart.shoes} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  order: state.order,
  user: state.user,
  shoes: state.order.shoes,
  cart: state.cart
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  getOrder: id => dispatch(getSingleOrderThunk(id)),
  delete: id => {
    dispatch(removeOrderThunk(id))
    ownProps.history.push('/orders')
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleOrder)
