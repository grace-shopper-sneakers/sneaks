const Sequelize = require('sequelize')
const db = require('../db')

const OrderShoe = db.define('orderShoe', {
  priceAtPurchase: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  }
})

module.exports = OrderShoe
