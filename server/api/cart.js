const router = require('express').Router()
const {Order, Shoe} = require('../db/models/')
const {Op} = require('sequelize')

router.get('/', async (req, res, next) => {
  try {
    if (req.user) {
      const userCart = await Order.findOne({
        where: {
          userId: req.user.id,
          isCart: true
        },
        include: [Shoe]
      })
      res.json(userCart.shoes.map(shoe => shoe.id))
    } else {
      res.send({status: 404})
    }
  } catch (error) {
    next(error)
  }
})

router.put('/', async (req, res, next) => {
  try {
    if (req.user) {
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
      res.json(req.body.id)
    } else {
      res.send({status: 404})
    }
  } catch (error) {
    next(error)
  }
})
router.put('/checkout', async (req, res, next) => {
  try {
    let order
    console.log('req.user', req.user)
    if (!req.user) {
      console.log('req.body', req.body)
      const shoes = await Shoe.findAll({
        where: {
          id: {
            [Op.in]: req.body
          }
        }
      })
      console.log('shoes', shoes)
      order = {
        isCart: false,
        shoes
      }
    } else {
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
      order = {
        isCart: false,
        shoes,
        userId: req.user.id
      }
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
