const router = require('express').Router()
const User = require('../db/models/user')
module.exports = router
const Order = require('../db/models/order')

router.post('/login', async (req, res, next) => {
  try {
    const user = await User.findOne({where: {email: req.body.email}})
    if (!user) {
      console.log('No such user found:', req.body.email)
      res.status(401).send('Wrong username and/or password')
    } else if (!user.correctPassword(req.body.password)) {
      console.log('Incorrect password for user:', req.body.email, req)
      res.status(401).send('Wrong username and/or password')
    } else {
      req.login(user, err => (err ? next(err) : res.json(user)))
    }
  } catch (err) {
    next(err)
  }
})

router.post('/signup', async (req, res, next) => {
  try {
    const user = await User.create(req.body)
    const order = await Order.create()
    // user.setOrder(order);
    req.login(user, err => (err ? next(err) : res.json(user)))
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists')
    } else {
      next(err)
    }
  }
})

//Admin will be able to get all Users in their portal
// router.get('/'...)

// get user by id will be per user or as Admin you can get anyone.
router.get('/:id', async (req, res, next) => {
  try {
    const foundUser = await User.findByPk(req.params.id)
    console.log('foundUser', foundUser)
    if (foundUser && (req.user.id === foundUser.userId || req.user.isAdmin)) {
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
    console.log('foundUser', foundUser)
    if (foundUser && req.user.isAdmin) {
      req.body.isAdmin = true
      const updatedUser = await foundUser.update(req.body)
      res.json(updatedUser)
    } else if (foundUser && req.user.id === foundUser.userId) {
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

router.post('/logout', (req, res) => {
  req.logout()
  req.session.destroy()
  res.redirect('/')
})

router.get('/me', (req, res) => {
  res.json(req.user)
})

router.use('/google', require('./google'))
