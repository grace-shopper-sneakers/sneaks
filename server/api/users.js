const router = require('express').Router()
const User = require('../db/models/user')
const {adminsOnly} = require('./gatewayutils')
module.exports = router

router.get('/', adminsOnly, async (req, res, next) => {
  try {
    const allUsers = await User.findAll({
      attributes: ['id', 'firstName', 'lastName', 'email']
    })
    res.json(allUsers)
  } catch (err) {
    next(err)
  }
})
// get user by id will be per user or as Admin you can get anyone.
router.get('/:id', async (req, res, next) => {
  try {
    const foundUser = await User.findByPk(req.params.id)
    if (foundUser && (req.user.id === foundUser.id || req.user.isAdmin)) {
      res.json(foundUser)
    } else res.status(404).send('Not Authorized')
  } catch (error) {
    next(error)
  }
})
//edit user. can't let user set their isAdmin
router.put('/:id', async (req, res, next) => {
  try {
    const foundUser = await User.findByPk(req.params.id)
    console.log('foundUser', foundUser, req.body)
    if (foundUser && req.user.isAdmin) {
      req.body.isAdmin = true
      const updatedUser = await foundUser.update(req.body)
      res.json(updatedUser)
    } else if (foundUser && req.user.id === foundUser.id) {
      if (foundUser.isAdmin === req.body.isAdmin) {
        req.body.isAdmin = false
        const updatedUser = await foundUser.update(req.body)
        res.json(updatedUser)
      } else {
        res.send('You cannot update Admin status')
      }
    } else res.status(404).send('User not found')
  } catch (error) {
    next(error)
  }
})
