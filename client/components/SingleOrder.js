import React from 'react'
import Order from './Order'
import {connect} from 'react-redux'
import {getSingleOrderThunk, removeOrderThunk} from '../store'
import AllOrders from './AllOrders'
import AllShoes from './AllShoes'

class SingleOrder extends React.Component {
  componentDidMount() {
    this.props.getOrder(this.props.match.params.id)
    console.log(this.props.order)
  }
  render() {
    console.log('IN RENDER')
    return (
      <div>
        <AllShoes shoes={this.props.shoes} />
        <div>order</div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  order: state.order,
  user: state.user,
  shoes: state.order.shoes
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  getOrder: id => dispatch(getSingleOrderThunk(id)),
  delete: id => {
    dispatch(removeOrderThunk(id))
    ownProps.history.push('/orders')
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleOrder)
