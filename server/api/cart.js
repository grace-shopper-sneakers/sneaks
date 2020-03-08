const router = require('express').Router()
const {Order, User, Shoe} = require('../db/models/')
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
    const userCart = await Order.findOne(
      {
        where: {
          userId: req.user.id,
          isCart: true
        }
      },
      {include: [Shoe]}
    )
    const shoes = await userCart.getShoes()
    console.log('shoes!!', shoes)
    await userCart.setShoes([])
    console.log('shoes should be empty', userCart)
    const order = {
      isCart: false,
      shoes,
      userId: req.user.id
    }
    res.status(200).json(order)
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
    console.log('userCart', userCart)

    const removedShoe = await Shoe.findByPk(req.params.id)

    await userCart.removeShoe(removedShoe)

    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
})

module.exports = router
