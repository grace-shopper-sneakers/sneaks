const router = require('express').Router()
const {User, Shoe, Order} = require('../db/models/')
const {adminsOnly} = require('./gatewayutils')

router.get('/', async (req, res, next) => {
  try {
    const allOrders = await Order.findAll({
      where: {
        isCart: false
      },
      include: [User]
    })
    if (allOrders && req.user && req.user.isAdmin) {
      res.json(allOrders)
    } else if (allOrders && req.user) {
      let filteredOrders = allOrders.filter(
        order => order.userId === req.user.id && !order.isCart
      )
      res.json(filteredOrders)
    } else res.sendStatus(401)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const foundOrder = await Order.findOne({
      where: {id: req.params.id},
      include: [User, Shoe]
    })
    if (foundOrder && (req.user.id === foundOrder.userId || req.user.isAdmin)) {
      res.json(foundOrder)
    } else res.status(401).send('Not Authorized')
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const {shoes, isCart, userId} = req.body
    const order = await Order.create({isCart, userId}, {include: [Shoe, User]})
    await order.setShoes(shoes.map(shoe => shoe.id))
    if (order) {
      res.json(order)
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
