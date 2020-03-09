import React from 'react'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const AdminPortal = props => {
  const {email} = props

  return (
    <div>
      <h3>Welcome to the ADMIN PORTAL, {email}</h3>
      <div>All Registered Users</div>
      <div>Shoe Inventory and Management</div>
    </div>
  )
}

/**
 * CONTAINER
 */

const mapDispatchToProps = dispatch => ({})

const mapState = state => {}

export default connect(mapState, mapDispatchToProps)(AdminPortal)
