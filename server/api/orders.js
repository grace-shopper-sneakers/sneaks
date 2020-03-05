const router = require('express').Router()
const Order = require('../db/models/order')
const Shoe = require('../db/models/shoe')
const {adminsOnly} = require('./gatewayutils')

router.get('/', adminsOnly, async (req, res, next) => {
  try {
    const allOrders = await Order.findAll()
    if (allOrders) {
      res.json(allOrders)
    } else res.sendStatus(404)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const foundOrder = await Order.findOne({
      where: {id: req.params.id},
      include: [Shoe]
    })
    if (foundOrder) res.json(foundOrder)
    else res.sendStatus(404)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newOrder = await Order.create(req.body)
    if (newOrder) {
      res.json(newOrder)
    } else res.send('New Order not created')
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', adminsOnly, async (req, res, next) => {
  try {
    const foundOrder = await Order.findByPk(req.params.id)
    await foundOrder.destroy()
    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
})

module.exports = router
