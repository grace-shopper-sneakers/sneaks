/* eslint-disable complexity */
import React from 'react'
import {connect} from 'react-redux'
import UserProfileForm from './UserProfileForm'
import {editUser, adminGetUser} from '../store'

class UserProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      street: '',
      apartmentNumber: '',
      city: '',
      zip: '',
      country: '',
      phoneNumber: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }
  handleSubmit(evt) {
    evt.preventDefault()

    const editedUser = {
      id: this.props.user.id,
      email: !evt.target.email.value
        ? this.props.user.email
        : evt.target.email.value,
      password: !evt.target.password.value
        ? this.props.user.password
        : evt.target.password.value,
      firstName: !evt.target.firstName.value
        ? this.props.user.firstName
        : evt.target.firstName.value,
      lastName: !evt.target.lastName.value
        ? this.props.user.lastName
        : evt.target.lastName.value,
      street: !evt.target.street.value
        ? this.props.user.street
        : evt.target.street.value,
      apartmentNumber: !evt.target.apartmentNumber.value
        ? this.props.user.apartmentNumber
        : evt.target.apartmentNumber.value,
      city: !evt.target.city.value
        ? this.props.user.city
        : evt.target.city.value,
      zip: !evt.target.zip.value ? this.props.user.zip : evt.target.zip.value,
      country: !evt.target.country.value
        ? this.props.user.country
        : evt.target.country.value,
      phoneNumber: !evt.target.phoneNumber.value
        ? this.props.user.phoneNumber
        : evt.target.phoneNumber.value,
      isAdmin: this.props.user.isAdmin,
      googleId: this.props.user.googleId
    }

    this.props.editUser(editedUser, editedUser.id)
  }

  render() {
    console.log('this.state', this.state)
    return (
      <div>
        {this.props.adminUser ? (
          <h1>
            {this.props.adminUser.firstName} {this.props.adminUser.lastName}
          </h1>
        ) : (
          <h1>
            {this.props.user.firstName} {this.props.user.lastName}
          </h1>
        )}

        <div>
          {this.props.adminUser ? (
            <UserProfileForm
              {...this.state}
              user={this.props.adminUser}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
          ) : (
            <UserProfileForm
              {...this.state}
              user={this.props.user}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  adminUser: state.adminUser
})

const mapDispatchToProps = dispatch => ({
  adminGetUser: id => {
    dispatch(adminGetUser(id))
  },
  editUser: (user, userId) => dispatch(editUser(user, userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
