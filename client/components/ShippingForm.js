import React from 'react'

const initialState = {
  firstName: '',
  lastName: '',
  street: '',
  apartmentNumber: '',
  city: '',
  zip: '',
  country: '',
  phoneNumber: ''
}

class ShippingForm extends React.Component {
  constructor() {
    super()
    this.state = initialState
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
    if (this.validate()) {
      this.props.checkout()
    } else {
      console.log('form is not valid')
    }
    console.log(this.state)
  }
  validate() {
    let isValid = true
    Object.keys(this.state).forEach(key => {
      if (this.state[key] === '') {
        console.log(key + ' cannot be empty!')
        isValid = false
      }
    })
    return isValid
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>Order Form</legend>
          <label htmlFor="first-name">First Name</label>
          <input
            id="first-name"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <label htmlFor="last-name">Last Name</label>
          <input
            id="last-name"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <label htmlFor="street-address">Street Address</label>
          <input
            id="street-address"
            name="street"
            value={this.state.street}
            onChange={this.handleChange}
          />
          <label htmlFor="apartmentNumber">Apt #</label>
          <input
            id="apartmentNumber"
            name="apartmentNumber"
            value={this.state.apartmentNumber}
            onChange={this.handleChange}
          />
          <label htmlFor="city">City</label>
          <input
            id="city"
            name="city"
            value={this.state.city}
            onChange={this.handleChange}
          />
          <label htmlFor="country">Country</label>
          <input
            id="country"
            name="country"
            value={this.state.country}
            onChange={this.handleChange}
          />
          <label htmlFor="phoneNumber">Phone #</label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            value={this.state.phoneNumber}
            onChange={this.handleChange}
          />
          <button type="submit">Confirm Purchase</button>
        </fieldset>
      </form>
    )
  }
}

export default ShippingForm
