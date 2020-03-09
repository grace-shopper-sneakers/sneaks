import React from 'react'

const UserProfileForm = ({handleChange, handleSubmit, user}) => {
  // Need some validation checks here
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Edit your profile</legend>
        <label htmlFor="first-name">First Name</label>
        <input
          id="first-name"
          name="firstName"
          type="text"
          placeholder={user.firstName}
          value={user.firstName}
          onChange={handleChange}
        />
        {/* <div> {firstNameError}</div> */}
        <label htmlFor="last-name">Last Name</label>
        <input
          id="last-name"
          name="lastName"
          type="text"
          placeholder={user.lastName}
          value={user.lastName}
          onChange={handleChange}
        />
        {/* <div> {lastNameError}</div> */}
        <label htmlFor="street-address">Street Address</label>
        <input
          id="street-address"
          name="street"
          type="text"
          placeholder={user.street}
          value={user.street}
          onChange={handleChange}
        />
        {/* <div> {streetError}</div> */}
        <label htmlFor="apartmentNumber">Apt #</label>
        <input
          id="apartmentNumber"
          name="apartmentNumber"
          type="integer"
          placeholder={user.apartmentNumber}
          value={user.apartmentNumber}
          onChange={handleChange}
        />
        <label htmlFor="city">City</label>
        <input
          id="city"
          name="city"
          type="text"
          placeholder={user.city}
          value={user.city}
          onChange={handleChange}
        />
        {/* <div> {cityError}</div> */}
        <label htmlFor="country">Country</label>
        <input
          id="country"
          name="country"
          type="text"
          placeholder={user.country}
          value={user.country}
          onChange={handleChange}
        />
        {/* <div> {countryError}</div> */}
        <label htmlFor="zip">Zipcode</label>
        <input
          id="zip"
          name="zip"
          type="text"
          placeholder={user.zip}
          value={user.zip}
          onChange={handleChange}
        />
        {/* <div> {zipError}</div> */}
        <label htmlFor="phoneNumber">Phone #</label>
        <input
          id="phoneNumber"
          name="phoneNumber"
          type="tel"
          placeholder={user.phoneNumber}
          value={user.phoneNumber}
          onChange={handleChange}
        />
        {/* <div> {phoneNumberError}</div>
        <div> {mustBeNumber}</div> */}
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder={user.email}
          value={user.email}
          onChange={handleChange}
        />
        <p />
        <button type="submit">Edit</button>
      </fieldset>
    </form>
  )
}

export default UserProfileForm
