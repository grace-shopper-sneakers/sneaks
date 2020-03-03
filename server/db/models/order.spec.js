const {expect} = require('chai')
const db = require('../index')
const Order = db.model('order')

describe('Order model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })
  it('throws an error when size is not provided', async () => {
    let result, error
    try {
      await Order.create({
        brand: 'Nike',
        color: 'Blue',
        model: 'Air Force 1',
        price: 100.5
      })
    } catch (err) {
      error = err
    }
    if (result) throw Error('validation should fail when size is invalid')
    expect(error).to.be.an.instanceOf(Error)
  })

  it('validates with valid size input', async () => {
    try {
      let order = await Order.create({
        size: '10',
        brand: 'Nike',
        color: 'Blue',
        model: 'Air Force 1',
        price: 100.5
      })
      expect(order.size).to.be.equal('10')
    } catch (error) {
      console.error(error)
    }
  })

  it('throws an error with invalid size input', async () => {
    let error, order
    try {
      order = await Order.create({
        size: '15',
        brand: 'Nike',
        color: 'Blue',
        model: 'Air Force 1',
        price: 100.5
      })
    } catch (err) {
      error = err
    }
    if (order) throw Error('validation should fail when size input is invalid')
    expect(error).to.be.an.instanceOf(Error)
  })

  it('throws an error when brand is not provided', async () => {
    let result, error
    try {
      await Order.create({
        size: 10,
        color: 'Blue',
        model: 'Air Force 1',
        price: 100.5
      })
    } catch (err) {
      error = err
    }
    if (result) throw Error('validation should fail when brand is invalid')
    expect(error).to.be.an.instanceOf(Error)
  })

  it('throws an error when color is not provided', async () => {
    let result, error
    try {
      await Order.create({
        size: 10,
        brand: 'Nike',
        model: 'Air Force 1',
        price: 100.5
      })
    } catch (err) {
      error = err
    }
    if (result) throw Error('validation should fail when color is invalid')
    expect(error).to.be.an.instanceOf(Error)
  })

  it('throws an error when model is not provided', async () => {
    let result, error
    try {
      await Order.create({
        size: 10,
        brand: 'Nike',
        color: 'Black',
        price: 100.5
      })
    } catch (err) {
      error = err
    }
    if (result) throw Error('validation should fail when model is invalid')
    expect(error).to.be.an.instanceOf(Error)
  })

  it('throws an error when price is not provided', async () => {
    let result, error
    try {
      await Order.create({
        size: 10,
        brand: 'Nike',
        color: 'Black',
        model: 'Air Force 1'
      })
    } catch (err) {
      error = err
    }
    if (result) throw Error('validation should fail when price is invalid')
    expect(error).to.be.an.instanceOf(Error)
  })
}) // end describe('User model')
