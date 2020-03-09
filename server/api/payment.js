const router = require('express').Router()

const stripe = require('stripe')('sk_test_xCN3jiZTrmmLpETSczLu0XMq0008E17vvu')

const uuid = require('uuid/v4')

// const postStripeCharge = (res) => (stripeErr, stripeRes) => {
// 	if (stripeErr) {
// 		res.status(500).send({ error: stripeErr });
// 	} else {
// 		res.status(200).send({ success: stripeRes });
// 	}
// };

router.get('/', (req, res) => {
  res.send({
    message: 'Hello Stripe checkout server!',
    timestamp: new Date().toISOString()
  })
})

router.post('/', async (req, res) => {
  console.log('request', req.body)

  let error
  let status

  try {
    const {product, token} = req.body

    const customer = await stripe.customer.create({
      email: token.email,
      source: token.id
    })

    const idempotency_key = uuid()

    const charge = await stripe.charges.create(
      {
        amount: product.price * 100,
        currency: 'usd',
        receipt_email: token.email,
        description: 'Purchased',
        shipping: {
          name: token.card.name,
          address: {
            line1: token.card.address_line1,
            line2: token.card.address_line2,
            city: token.card.address_city,
            country: token.card.address_country,
            postal_code: token.card.address_zip
          }
        }
      },
      {
        idempotency_key
      }
    )
    console.log('charge:', charge)
    status = 'success'
    res.json(charge)
  } catch (error) {
    console.error(error)
    status = 'failure'
  }
  res.json({error, status})

  // stripe.charges.create(req.body, postStripeCharge(res));
})

module.exports = router
