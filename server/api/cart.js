const router = require('express').Router()
const Cart = require('../db/models/cart')
// const Shoe = require('../db/models/shoe');

router.get('/', async (req, res, next) => {
  try {
    const userCart = await Cart.findOne({
      where: {
        userId: req.session.userId
      }
    })
    res.json(userCart)
  } catch (error) {
    next(error)
  }
})

module.exports = router
