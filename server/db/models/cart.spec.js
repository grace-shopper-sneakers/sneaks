// const {expect} = require('chai')
// const db = require('../index')
// const Cart = db.model('cart')

// describe('Cart model', () => {
//   beforeEach(() => {
//     return db.sync({force: true})
//   })
//   describe('checkedOut', () => {
//     it('the default value should be false', async () => {
//       let cart = await Cart.create({})
//       expect(cart.checkedOut).to.be.equal(false)
//     })

//     it('checkedOut value can be set', async () => {
//       let cart = await Cart.create({
//         checkedOut: true
//       })

//       expect(cart.checkedOut).to.be.equal(true)
//     })
//   })
// })
