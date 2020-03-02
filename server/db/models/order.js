const Sequelize = require('sequelize');
const db = require('../db');

const Order = db.define('order', {
	orderId: {
		//represents group of ordered items in purchased
		type: Sequelize.INTEGER
	},
	orderDate: {
		type: Sequelize.DATE
	},
	size: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	brand: {
		type: Sequelize.STRING,
		allowNull: false
	},
	color: {
		type: Sequelize.STRING,
		allowNUll: false
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
});

module.exports = Order;
