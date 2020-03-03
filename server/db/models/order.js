const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  orderId: {
    //represents group of ordered items in purchased
    type: Sequelize.INTEGER
  },
  orderDate: {
    type: Sequelize.DATE
  },
  size: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isIn: [
        [
          '7',
          '7.5',
          '8',
          '8.5',
          '9',
          '9.5',
          '10',
          '10.5',
          '11',
          '11.5',
          '12',
          '12.5',
          '13',
          '13.5',
          '14'
        ]
      ]
    }
  },
  brand: {
    type: Sequelize.STRING,
    allowNull: false
  },
  color: {
    type: Sequelize.STRING,
    allowNull: false
  },
  model: {
    type: Sequelize.STRING,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.TEXT
  },
  image: {
    type: Sequelize.STRING,
    defaultValue: 'no shoe image'
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  }
})

module.exports = Order
