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
    res.json(userCart.shoes)
  } catch (error) {
    next(error)
  }
})

router.put('/', async (req, res, next) => {
  try {
    const userCart = await Cart.findOne({
      where: {
        userId: req.user.id
      }
    })

    const addedShoe = await Shoe.findByPk(req.body.id)

    await userCart.addShoe(addedShoe)

    res.json(addedShoe)
  } catch (error) {
    next(error)
  }
})
router.delete('/checkout', async (req, res, next) => {
  try {
    const userCart = await Cart.findOne({
      where: {
        userId: req.user.id
      }
    })
    const shoes = await userCart.getShoes()
    await userCart.setShoes([])
    res.status(200).json(shoes)
  } catch (error) {
    next(error)
  }
})
router.delete('/:id', async (req, res, next) => {
  try {
    const userCart = await Cart.findOne({
      where: {
        userId: req.user.id
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
