const router = require('express').Router()
const {Order, Shoe} = require('../db/models/')

router.get('/', async (req, res, next) => {
  try {
    const userCart = await Order.findOne({
      where: {
        userId: req.user.id,
        isCart: true
      },
      include: [Shoe]
    })
    console.log('userCart', userCart)
    res.json(userCart.shoes.map(shoe => shoe.id))
  } catch (error) {
    next(error)
  }
})

router.put('/', async (req, res, next) => {
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
    const addedShoe = await Shoe.findByPk(req.body.id)

    await userCart.addShoe(addedShoe)

    res.json(addedShoe.id)
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
    await userCart.setShoes([])
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

    const removedShoe = await Shoe.findByPk(req.params.id)

    await userCart.removeShoe(removedShoe)

    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
})

module.exports = router
