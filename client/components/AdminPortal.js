import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {adminGetAllUsers} from '../store'

class AdminPortal extends React.Component {
  componentDidMount() {
    this.props.adminGetAllUsers()
  }

  render() {
    const {user} = this.props

    return (
      <div>
        <h3>
          ADMIN PORTAL: {user.firstName} {user.lastName}
        </h3>
        <Link to="/users">
          <h4>All Registered Users</h4>
        </Link>

        <h4>Shoe Inventory and Management</h4>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  adminUsers: state.adminUsers,
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  adminGetAllUsers: () => {
    dispatch(adminGetAllUsers())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminPortal)
