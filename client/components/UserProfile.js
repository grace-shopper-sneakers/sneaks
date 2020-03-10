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
      // user: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  // componentDidMount() {
  //   const {adminAccessUserId} = this.props.location.state
  //   console.log(
  //     'UserProfile -> componentDidMount -> this.props.location.state',
  //     this.props.location.state
  //   )
  //   // if (adminAccessUserId) {
  //   //   const {user} = this.props.adminGetUser(adminAccessUserId)
  //   // } else {
  //   //   const {user} = this.props
  //   // }
  // }
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
    const {user} = this.props
    // const {user} = this.props.adminUsers
    //   ? this.props.adminGetUser(adminAccessUserId)
    //   : this.props
    console.log('UserProfile -> render -> user', user)
    console.log('UserProfile -> render -> this.props', this.props)

    return (
      <div>
        <h1>
          {user.firstName} {user.lastName}
        </h1>
        <UserProfileForm
          {...this.state}
          user={user}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  adminUsers: state.adminUsers,
  adminUser: state.adminUser
})

const mapDispatchToProps = dispatch => ({
  adminGetUser: id => {
    dispatch(adminGetUser(id))
  },
  editUser: (user, userId) => dispatch(editUser(user, userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
