import React from 'react'
import Order from './Order'
import {connect} from 'react-redux'
import {getSingleOrderThunk, removeOrderThunk} from '../store'

class SingleOrder extends React.Component {
  componentDidMount() {
    this.props.getOrder(this.props.match.params.id)
  }
  render() {
    return (
      <div>
        <Order order={this.props.order} />
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
