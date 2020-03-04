import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Login,
  Signup,
  UserHome,
  AllShoes,
  SingleShoe,
  AddShoe,
  AllOrders,
  SingleOrder,
  Checkout,
  Cart
} from './components'

import {me, getShoes, getOrdersThunk, getUserCart} from './store'
/**
 * COMPONENT
 */

console.log('addshoe', AddShoe)
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
    this.props.getShoes()
    this.props.getOrders()
    this.props.getCart()
  }

  render() {
    const {isLoggedIn} = this.props
    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route path="/login" component={Login} />
        <Route path="/cart" component={Cart} />
        <Route path="/signup" component={Signup} />
        <Route path="/shoes/add" component={AddShoe} />
        <Route path="/shoes/:id" component={SingleShoe} />
        <Route path="/shoes">
          <AllShoes shoes={this.props.shoes} />
        </Route>
        <Route path="/orders/:orderId" component={SingleOrder} />
        <Route path="/checkout">
          <Checkout orders={this.props.orders} />
        </Route>
        <Route path="/orders">
          <AllOrders orders={this.props.orders} />
        </Route>

        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route path="/home" component={UserHome} />
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
        <Route component={Login} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id,
    shoes: state.shoes,
    orders: state.orders
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    },
    getShoes() {
      dispatch(getShoes())
    },
    getOrders() {
      dispatch(getOrdersThunk())
    },
    getCart() {
      dispatch(getUserCart())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
