const router = require('express').Router()
const Order = require('../db/models/order')
const Shoe = require('../db/models/shoe')
const {adminsOnly} = require('./gatewayutils')

router.get('/', async (req, res, next) => {
  try {
    const userCart = await Order.findOne({
      where: {
        userId: req.user.id,
        isCart: true
      },
      include: [Shoe]
    })
    res.json(userCart)
  } catch (error) {
    next(error)
  }
})

router.put('/', async (req, res, next) => {
  try {
    const userCart = await Order.findOne({
      where: {
        userId: req.user.id,
        isCart: true
      }
    })

    const addedShoe = await Shoe.findByPk(req.body.id)

    await userCart.addShoe(addedShoe)

    res.json(userCart)
  } catch (error) {
    next(error)
  }
})
router.delete('/checkout', async (req, res, next) => {
  try {
    const userCart = await Order.findOne({
      where: {
        userId: req.user.id,
        isCart: true
      }
    })
    const shoes = await userCart.getShoes()
    await userCart.setShoes([])
    res.status(200).json(shoes)
  } catch (error) {
    next(error)
  }
})
router.put('/shoes/:id', async (req, res, next) => {
  try {
    const userCart = await Order.findOne({
      where: {
        userId: req.user.id,
        isCart: true
      }
    })

    const removedShoe = await Shoe.findByPk(req.params.id)

    await userCart.removeShoe(removedShoe)

    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
})

module.exports = router
