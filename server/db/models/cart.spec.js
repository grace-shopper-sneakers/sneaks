// const {expect} = require('chai')
// const db = require('../index')
// const Order = db.model('order')

// describe('Order model', () => {
//   beforeEach(() => {
//     return db.sync({force: true})
//   })
//   describe('checkedOut', () => {
//     it('the default value should be false', async () => {
//       let order = await Order.create({})
//       expect(order.checkedOut).to.be.equal(false)
//     })

//     it('checkedOut value can be set', async () => {
//       let order = await Order.create({
//         checkedOut: true
//       })

//       expect(order.checkedOut).to.be.equal(true)
//     })
//   })
// })
