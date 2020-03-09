import React from 'react'
import {connect} from 'react-redux'
import UserProfileForm from './UserProfileForm'
import {editUser} from '../store'

class UserProfile extends React.Component {
  constructor({user}) {
    super({user})
    this.state = {
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      street: user.street,
      apartmentNumber: user.apartmentNumber,
      city: user.city,
      zip: user.zip,
      country: user.country,
      phoneNumber: user.phoneNumber
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
      email: evt.target.email.value,
      // password: this.props.user.password,
      firstName: evt.target.firstName.value,
      lastName: evt.target.lastName.value,
      street: evt.target.street.value,
      apartmentNumber: evt.target.apartmentNumber.value,
      city: evt.target.city.value,
      zip: evt.target.zip.value,
      country: evt.target.country.value,
      phoneNumber: evt.target.phoneNumber.value,
      id: this.props.user.id,
      isAdmin: this.props.user.isAdmin,
      googleId: this.props.user.googleId
    }

    this.props.editUser(editedUser, editedUser.id)
    console.log('handleSubmit -> editedUser', editedUser)
  }
  render() {
    const {user} = this.props
    console.log('UserProfile -> render -> user', user)
    return (
      <div>
        <h1>
          {user.firstName} {user.lastName}
        </h1>
        <UserProfileForm
          user={user}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  editUser: (user, userId) => dispatch(editUser(user, userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
