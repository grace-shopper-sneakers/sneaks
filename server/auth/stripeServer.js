const configureStripe = require('stripe')
const STRIPE_SECRET_KEY =
  process.env.NODE_ENV === 'pk_test_EfbfrACdRLAn8tagUY0zXs0k00qDhWTGHy'
    ? 'sk_live_MY_SECRET_KEY'
    : 'sk_test_xCN3jiZTrmmLpETSczLu0XMq0008E17vvu'

const stripeServer = configureStripe(STRIPE_SECRET_KEY)
module.exports = stripeServer
