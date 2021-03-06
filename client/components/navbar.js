import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn, user, cart}) => {
  return (
    <div>
      <img src="img/logo2.png" className="logo" />
      <nav className="blue lighten-1">
        {isLoggedIn ? (
          <div>
            {/* The navbar will show these links after you log in */}
            {user.isAdmin ? (
              <Link to="/admin">Admin Portal</Link>
            ) : (
              <Link to="/home">Home</Link>
            )}
            <Link to="/shoes">Shoes!</Link>
            {user.isAdmin ? (
              <Link to="/orders">All Orders</Link>
            ) : (
              <Link to="/orders">My Orders</Link>
            )}
            <Link to="/myaccount">User Settings</Link>
            {cart.length > 0 ? <Link to="/checkout">Checkout</Link> : ''}
            <Link to="/cart">Cart {cart.length} item(s)</Link>
            <a href="#" onClick={handleClick}>
              Logout
            </a>
          </div>
        ) : (
          <div>
            {/* The navbar will show these links before you log in */}
            <Link to="/shoes">Shoes!</Link>
            {cart.length > 0 ? <Link to="/checkout">Checkout</Link> : ''}

            <Link to="/cart">Cart {cart.length} item(s)</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        )}
      </nav>
      <hr />
    </div>
  )
}

/**
 * CONTAINER
 */

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    user: state.user,
    cart: state.cart
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
