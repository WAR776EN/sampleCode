const { Product } = require('../models')
const { Op: { or }} = require('sequelize')

exports.createProduct = async (data, dbTransaction) => {
	try {
		const result = await Product.create(data, { transaction: dbTransaction })
		return result
	}
	catch(err) {
		throw err
	}
}

exports.findAllProducts = async () => {
	try {
		const result = await Product.findAll({
			attributes: {
				exclude: ['createdAt', 'updatedAt']
			}
		})
		return JSON.parse(JSON.stringify(result))
	}
	catch(err) {
		throw err
	}
}

exports.findOneProduct = async ({ id, name = '' }) => {
	try {
		const result = await Product.findOne({
			attributes: {
				exclude: ['createdAt', 'updatedAt']
			},
			where: {
				[or] : [{ id }, { name }]
			}
		})
		return JSON.parse(JSON.stringify(result))
	}
	catch(err) {
		throw err
	}
}