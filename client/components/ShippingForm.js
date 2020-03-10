/* eslint-disable complexity */
import React from 'react'
import CheckoutStripe from './CheckoutStripe'
import {Link, Redirect} from 'react-router-dom'

const initialState = {
  firstName: '',
  lastName: '',
  street: '',
  apartmentNumber: '',
  city: '',
  zip: '',
  country: '',
  phoneNumber: '',
  firstNameError: '',
  lastNameError: '',
  streetError: '',
  cityError: '',
  countryError: '',
  phoneNumberError: '',
  mustBeNumber: ''
}

class ShippingForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = initialState
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.validate = this.validate.bind(this)
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  validate = () => {
    let firstNameError = ''
    let lastNameError = ''
    let streetError = ''
    let cityError = ''
    let countryError = ''
    let phoneNumberError = ''
    let mustBeNumber = ''

    if (!this.state.firstName) {
      firstNameError = 'first name cannot be blank'
    }
    if (!this.state.lastName) {
      lastNameError = 'last name cannot be blank'
    }

    if (this.state.street.length < 7) {
      streetError = 'must be valid street address'
    }

    if (!this.state.city) {
      cityError = 'city cannot be blank'
    }
    if (!this.state.country) {
      countryError = 'country cannot be blank'
    }

    if (
      this.state.phoneNumber.length < 10 ||
      this.state.phoneNumber.length > 12
    ) {
      phoneNumberError = 'phone number must be between 10-12 digits'
    }

    if (isNaN(this.state.phoneNumber)) {
      mustBeNumber = 'must only contain number'
    }

    if (
      firstNameError ||
      lastNameError ||
      streetError ||
      cityError ||
      countryError ||
      phoneNumberError ||
      mustBeNumber
    ) {
      this.setState({
        firstNameError,
        lastNameError,
        streetError,
        cityError,
        countryError,
        phoneNumberError,
        mustBeNumber
      })
      return false
    }

    return true
  }

  handleSubmit(event) {
    event.preventDefault()
    const isValid = this.validate()
    if (isValid) {
      this.props.checkout()
      this.setState(initialState)
      console.log(this.props)
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="orderForm">
        <fieldset>
          <legend>Order Form</legend>
          <label htmlFor="first-name">First Name</label>
          <input
            id="first-name"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <div> {this.state.firstNameError}</div>
          <label htmlFor="last-name">Last Name</label>
          <input
            id="last-name"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <div> {this.state.lastNameError}</div>
          <label htmlFor="street-address">Street Address</label>
          <input
            id="street-address"
            name="street"
            value={this.state.street}
            onChange={this.handleChange}
          />
          <div> {this.state.streetError}</div>
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
          <div> {this.state.cityError}</div>
          <label htmlFor="country">Country</label>
          <input
            id="country"
            name="country"
            value={this.state.country}
            onChange={this.handleChange}
          />
          <div> {this.state.countryError}</div>
          <label htmlFor="phoneNumber">Phone #</label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            value={this.state.phoneNumber}
            onChange={this.handleChange}
          />
          <div> {this.state.phoneNumberError}</div>
          <div> {this.state.mustBeNumber}</div>
          <p />

          <button className="btn red accent-2" type="submit">
            Confirm Purchase
          </button>
        </fieldset>
      </form>
    )
  }
}

export default ShippingForm
