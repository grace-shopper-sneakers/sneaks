const router = require('express').Router()
const Order = require('../db/models/order')
const Shoe = require('../db/models/shoe')
const {adminsOnly} = require('./gatewayutils')

router.get('/', async (req, res, next) => {
  try {
    const allOrders = await Order.findAll()
    // console.log('allOrders', allOrders)
    if (allOrders && req.user.isAdmin) {
      res.json(allOrders)
    } else if (allOrders && req.user) {
      let filteredOrders = allOrders.filter(
        order => order.userId === req.user.id
      )
      // console.log('filteredOrders', filteredOrders)
      res.json(filteredOrders)
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
    // if admin or userid matches foundOrder.userId, you can look
    // console.log('foundOrder', foundOrder.userId)
    // console.log('req.user', req.user)
    if (foundOrder && (req.user.id === foundOrder.userId || req.user.isAdmin)) {
      res.json(foundOrder)
    } else res.status(404).send('Not Authorized')
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
