const router = require('express').Router()
const Cart = require('../db/models/cart')
const Shoe = require('../db/models/shoe')

router.get('/', async (req, res, next) => {
  try {
    const userCart = await Cart.findOne({
      where: {
        userId: req.user.id
      },
      include: [Shoe]
    })
    console.log('usercart', userCart)
    res.json(userCart.shoes)
  } catch (error) {
    next(error)
  }
})

router.put('/', async (req, res, next) => {
  console.log(req.user)
  try {
    const userCart = await Cart.findOne({
      where: {
        userId: req.user.id
      }
    })

    const addedShoe = await Shoe.findByPk(req.body.id)

    const cartedShoe = await userCart.addShoe(addedShoe)

    console.log(cartedShoe)
    res.json(addedShoe)
  } catch (error) {
    next(error)
  }
})

module.exports = router