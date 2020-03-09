const router = require('express').Router()
const User = require('../db/models/user')
module.exports = router

// router.get('/', async (req, res, next) => {
//   try {
//     // const users = await User.findAll({
//     //   // explicitly select only the id and email fields - even though
//     //   // users' passwords are encrypted, it won't help if we just
//     //   // send everything to anyone who asks!
//     //   attributes: ['id', 'email']
//     // })
//     // res.json(users)
//     res.send('Hello World!')
//   } catch (err) {
//     next(err)
//   }

//Admin will be able to get all Users in their portal
// router.get('/'...)

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
