import React from 'react'
import {connect} from 'react-redux'

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
                      <button
                        type="button"
                        onClick={() =>
                          props.adminEditUser(adminUser, adminUser.id)
                        }
                      />
                    </td>
                    <td>
                      <button
                        type="button"
                        onClick={() => props.adminDeleteUser(adminUser.id)}
                      />
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

export default connect(mapStateToProps, null)(AdminUsersPortal)
