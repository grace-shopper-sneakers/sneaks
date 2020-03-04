const router = require('express').Router()
const Shoe = require('../db/models/shoe')
const adminsOnly = require('./gatewayutils')

//get a shoe by its id
router.get('/:id', async (req, res, next) => {
  try {
    const shoe = await Shoe.findByPk(req.params.id)
    res.json(shoe)
  } catch (e) {
    next(e)
  }
})
router.delete('/:id', adminsOnly, async (req, res, next) => {
  try {
    const shoe = await Shoe.findByPk(req.params.id)
    await shoe.destroy()
    res.sendStatus(204)
  } catch (e) {
    next(e)
  }
})
router.post('/', adminsOnly, async (req, res, next) => {
  try {
    const shoe = await Shoe.create(req.body)
    res.json(shoe)
  } catch (e) {
    next(e)
  }
})
router.get('/', async (req, res, next) => {
  try {
    const shoes = await Shoe.findAll()
    res.json(shoes)
  } catch (e) {
    next(e)
  }
})

module.exports = router
