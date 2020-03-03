/* eslint-disable no-unused-expressions */
/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const User = db.model('user')

describe('User model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('instanceMethods', () => {
    describe('correctPassword', () => {
      let cody

      beforeEach(async () => {
        cody = await User.create({
          email: 'cody@puppybook.com',
          password: 'bones'
        })
      })

      it('returns true if the password is correct', () => {
        expect(cody.correctPassword('bones')).to.be.equal(true)
      })

      it('returns false if the password is incorrect', () => {
        expect(cody.correctPassword('bonez')).to.be.equal(false)
      })
    }) // end describe('correctPassword')
  }), // end describe('instanceMethods')
    describe('validations', () => {
      describe('email', () => {
        it('works with a valid email', async () => {
          let cody = await User.create({
            email: 'cody@puppybook.com',
            password: 'bones'
          })
          expect(cody.email).to.be.equal('cody@puppybook.com')
        })
        it('does not allow invalid email', async () => {
          let cody = await User.create({
            email: 'cody@puppybook.com',
            password: 'bones'
          })
          cody.email = 'cody'

          let result, error
          try {
            result = await cody.validate()
          } catch (err) {
            error = err
          }
          if (result)
            throw Error('validation should fail when email is invalid')
          expect(error).to.be.an.instanceOf(Error)
        })
      })
      describe('zip', () => {
        it('works with a valid zip code', async () => {
          let cody = await User.create({
            email: 'cody@puppybook.com',
            password: 'bones',
            zip: '10001'
          })

          expect(cody.zip).to.be.equal('10001')
        })

        //   it('validation fails with an invalid zip code length', async () => {
        //     let cody = await User.create({
        //       email: 'cody@puppybook.com',
        //       password: 'bones'
        //     })

        //     cody.zip = '1000091'

        //     let result, error
        //     try {
        //       result = await cody.validate()
        //     } catch (err) {
        //       error = err
        //     }
        //     if (result)
        //       throw Error('validation should fail when zip code is invalid')
        //     expect(error).to.be.an.instanceOf(Error)
        //   })

        //   it('validation fails with an invalid zip code character', async () => {
        //     let cody = await User.create({
        //       email: 'cody@puppybook.com',
        //       password: 'bones'
        //     })

        //     cody.zip = 'aaaaa'

        //     let result, error
        //     try {
        //       result = await cody.validate()
        //     } catch (err) {
        //       error = err
        //     }
        //     if (result)
        //       throw Error('validation should fail when zip code is invalid')
        //     expect(error).to.be.an.instanceOf(Error)
        //   })
      })
      describe('phone number', () => {
        it('works with a valid phone number', async () => {
          let cody = await User.create({
            email: 'cody@puppybook.com',
            password: 'bones',
            zip: '10001'
          })
          cody.phoneNumber = '5162706865'

          try {
            await cody.validate()
            cody.phoneNumber = '2122222222'
            await cody.validate()
            cody.phoneNumber = '21222222224'
            await cody.validate()
            expect(cody.phoneNumber).to.be.equal('21222222224')
          } catch (error) {
            console.error(error)
          }
        })

        it('validation fails with an invalid phone number length', async () => {
          let cody = await User.create({
            email: 'cody@puppybook.com',
            password: 'bones',
            zip: '10001'
          })
          cody.phoneNumber = '1234567890123'
          let result, error
          try {
            result = await cody.validate()
          } catch (err) {
            error = err
          }
          if (result)
            throw Error('validation should fail when zip code is invalid')
          expect(error).to.be.an.instanceOf(Error)
        })
        // it('validation fails with an invalid phone number character', async () => {
        //   let cody = await User.create({
        //     email: 'cody@puppybook.com',
        //     password: 'bones',
        //     zip: '10001'
        //   })
        //   cody.phoneNumber = 'a123456789'
        //   let result, error
        //   try {
        //     result = await cody.validate()
        //   } catch (err) {
        //     error = err
        //   }
        //   if (result)
        //     throw Error('validation should fail when zip code is invalid')
        //   expect(error).to.be.an.instanceOf(Error)
        // })
      })
      describe('isAdmin', () => {
        it('the default value should be false', async () => {
          let cody = await User.create({
            email: 'cody@puppybook.com',
            password: 'bones',
            zip: '10001'
          })
          expect(cody.isAdmin).to.be.equal(false)
        })

        it('admin value can be set properly', async () => {
          let cody = await User.create({
            email: 'cody@puppybook.com',
            password: 'bones',
            zip: '10001',
            isAdmin: true
          })

          expect(cody.isAdmin).to.be.equal(true)
        })
      })
      describe('country', () => {
        it('the default value should be USA', async () => {
          let cody = await User.create({
            email: 'cody@puppybook.com',
            password: 'bones',
            zip: '10001'
          })
          expect(cody.country).to.be.equal('United States of America')
        })

        it('country value can be set properly', async () => {
          let cody = await User.create({
            email: 'cody@puppybook.com',
            password: 'bones',
            zip: '10001',
            country: 'Canada'
          })

          expect(cody.country).to.be.equal('Canada')
        })
      })
    })
}) // end describe('User model')
