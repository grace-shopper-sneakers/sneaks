const Sequelize = require('sequelize')
const db = require('../db')
const Shoe = require('./shoe')
const Order = require('./order')

const OrderShoe = db.define(
  'orderShoe',
  {
    priceAtPurchase: {
      type: Sequelize.INTEGER
    },
    quantity: {
      type: Sequelize.INTEGER,
      defaultValue: 1
    }
  },
  {
    hooks: {
      beforeBulkCreate: async orderShoes => {
        const shoe = await Shoe.findOne({where: {id: orderShoes[0].shoeId}})
        const cart = await Order.findOne({where: {id: orderShoes[0].orderId}})
        if (cart) {
          orderShoes[0].priceAtPurchase = shoe.price
        }
      }
    }
  }
)

module.exports = OrderShoe
