import React from 'react'
import {connect} from 'react-redux'
import {adminGetUser, adminEditUser, adminDeleteUser} from '../store'
import {Link} from 'react-router-dom'

const AdminUsersPortal = props => {
  console.log('AdminUsersPortal -> props', props)
  if (!props.adminUsers) {
    return <h1>No Users. Chapter 11 here we come!</h1>
  }
  return (
    <div>
      <ul>
        <li>Ask Users to reassign passwords quarterly.</li>
      </ul>
      <div>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Edit</th>
              <th>Delete FOREVER</th>
            </tr>
          </thead>
          <tbody>
            {props.adminUsers &&
              props.adminUsers.map(adminUser => {
                return (
                  <tr key={adminUser.id}>
                    <td>{adminUser.id}</td>
                    <td>
                      {adminUser.firstName} {adminUser.lastName}
                    </td>
                    <td>{adminUser.email}</td>
                    <td>
                      <Link to="/myaccount">
                        <button
                          type="button"
                          onClick={() => props.adminGetUser(adminUser.id)}
                        >
                          Edit
                        </button>
                      </Link>
                    </td>
                    <td>
                      <button
                        type="button"
                        onClick={() => props.adminDeleteUser(adminUser.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  adminUsers: state.adminUsers
})

const mapDispatchToProps = dispatch => ({
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminUsersPortal)
