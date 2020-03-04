import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getUserCart} from '../store'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email} = props

  return (
    <div>
      <h3>Welcome, {email}</h3>
    </div>
  )
}

/**
 * CONTAINER
 */

const mapDispatchToProps = dispatch => ({
  getCart: () => {
    dispatch(getUserCart())
  }
})

const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState, mapDispatchToProps)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
