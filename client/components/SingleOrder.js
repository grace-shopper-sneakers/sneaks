import React from 'react'
import Order from './Order'
import {connect} from 'react-redux'
import {getSingleOrderThunk, removeOrderThunk} from '../store'
import AllOrders from './AllOrders'

class SingleOrder extends React.Component {
  componentDidMount() {
    this.props.getOrder(this.props.match.params.orderId)
  }
  render() {
    return (
      <div>
        <AllOrders orders={this.props.order} />
        {this.props.user.isAdmin && this.props.order ? (
          <button
            type="button"
            onClick={() => this.props.delete(this.props.order.id)}
          >
            Delete
          </button>
        ) : (
          ''
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  order: state.order,
  user: state.user
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  getOrder: orderId => dispatch(getSingleOrderThunk(orderId)),
  delete: id => {
    dispatch(removeOrderThunk(id))
    ownProps.history.push('/orders')
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleOrder)
