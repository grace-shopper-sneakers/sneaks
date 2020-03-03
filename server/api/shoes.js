const router = require('express').Router()
const Shoe = require('../db/models/shoe')
//get a shoe by its id
router.get('/:id', async (req, res, next) => {
  try {
    const shoe = await Shoe.findByPk(req.params.id)
    res.json(shoe)
  } catch (e) {
    next(e)
  }
})

module.exports = router
