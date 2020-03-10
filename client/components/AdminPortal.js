import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {
  adminGetAllUsers,
  adminGetUser,
  adminEditUser,
  adminDeleteUser
} from '../store'
import AdminUsersPortal from './AdminUsersPortal'
/**
 * COMPONENT
 */
// export const AdminPortal = props => {
class AdminPortal extends React.Component {
  componentDidMount() {
    this.props.adminGetAllUsers()
  }

  render() {
    const {
      user,
      adminUsers,
      adminGetUser,
      adminEditUser,
      adminDeleteUser
    } = this.props

    console.log('props', this.props)

    return (
      <div>
        <h3>
          Welcome to the ADMIN PORTAL, {user.firstName} {user.lastName}
        </h3>
        <Link to="/users">
          <h4>All Registered Users</h4>
        </Link>
        <AdminUsersPortal
          adminUsers={adminUsers}
          adminGetUser={adminGetUser}
          adminEditUser={adminEditUser}
          adminDeleteUser={adminDeleteUser}
        />
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
  },
  adminGetUser: id => {
    dispatch(adminGetUser(id))
  },
  adminEditUser: (user, userId) => {
    dispatch(adminEditUser(user, userId))
  },
  adminDeleteUser: id => {
    dispatch(adminDeleteUser(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminPortal)
