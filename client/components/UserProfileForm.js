import React from 'react'

const UserProfileForm = props => {
  return (
    <form onSubmit={props.handleSubmit} className="orderForm">
      <fieldset>
        <legend>Edit your profile</legend>
        <label htmlFor="first-name">First Name</label>
        <input
          id="first-name"
          name="firstName"
          type="text"
          placeholder={props.user.firstName}
          value={props.user.firstName}
          onChange={props.handleChange}
        />
        <label htmlFor="last-name">Last Name</label>
        <input
          id="last-name"
          name="lastName"
          type="text"
          placeholder={props.user.lastName}
          value={props.lastName}
          onChange={props.handleChange}
        />
        <label htmlFor="password">PASSWORD</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder={props.user.password}
          value={props.password}
          onChange={props.handleChange}
        />
        <label htmlFor="street-address">Street Address</label>
        <input
          id="street-address"
          name="street"
          type="text"
          placeholder={props.user.street}
          value={props.street}
          onChange={props.handleChange}
        />
        <label htmlFor="apartmentNumber">Apt #</label>
        <input
          id="apartmentNumber"
          name="apartmentNumber"
          type="integer"
          placeholder={props.user.apartmentNumber}
          value={props.apartmentNumber}
          onChange={props.handleChange}
        />
        <label htmlFor="city">City</label>
        <input
          id="city"
          name="city"
          type="text"
          placeholder={props.user.city}
          value={props.city}
          onChange={props.handleChange}
        />
        <label htmlFor="country">Country</label>
        <input
          id="country"
          name="country"
          type="text"
          placeholder={props.user.country}
          value={props.country}
          onChange={props.handleChange}
        />
        <label htmlFor="zip">Zipcode</label>
        <input
          id="zip"
          name="zip"
          type="text"
          placeholder={props.user.zip}
          value={props.zip}
          onChange={props.handleChange}
        />
        <label htmlFor="phoneNumber">Phone #</label>
        <input
          id="phoneNumber"
          name="phoneNumber"
          type="tel"
          placeholder={props.user.phoneNumber}
          value={props.phoneNumber}
          onChange={props.handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder={props.user.email}
          value={props.email}
          onChange={props.handleChange}
        />
        <p />
        <button type="submit">Edit</button>
      </fieldset>
    </form>
  )
}

export default UserProfileForm
