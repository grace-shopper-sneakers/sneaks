const router = require('express').Router()
const {User} = require('../db/models')
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
// // })
// router.post('/login', async (req, res, next) => {
//   // User.findOne({where: {email: req.body.email}}, {attributes: ['id', 'email', 'name', 'isAdmin', 'tags']})
//   return User.findOne({where: {email: req.body.email}})
//     .then(user => {
//       if (!user) {
//         res.status(401).send('User not found')
//       } else if (!user.correctPassword(req.body.password)) {
//         res.status(401).send('Incorrect password')
//       } else {
//         req.login(user, err => (err ? next(err) : res.json(user)))
//       }
//     })
//     .catch(next)
// })

// router.post('/signup', async (req, res, next) => {
//   return User.create(req.body)
//     .then(user => req.login(user, err => (err ? next(err) : res.json(user))))
//     .catch(err => {
//       if (err.name === 'SequelizeUniqueConstraintError')
//         res.status(401).send('User already exists')
//       else next(err)
//     })
// })

// router.post('/logout', (req, res) => {
//   req.logout()
//   res.redirect('/')
// })

// router.get('/me', (req, res) => {
//   res.json(req.user)
// })
