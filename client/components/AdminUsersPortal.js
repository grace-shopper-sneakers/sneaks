import React from 'react'

export default function AdminUsersPortal(props) {
  console.log('AdminUsersPortal -> props', props)

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
            </tr>
          </thead>
          <tbody>
            {/* {props.users &&
              props.users.map(user =>
                makeRow(user, props.adminDelUsers, props.adminPromoteUser)
              )} */}
          </tbody>
        </table>
      </div>
    </div>
  )
}
