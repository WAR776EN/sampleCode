const { Product } = require('../models')
const { Op: { or }} = require('sequelize')

exports.createProduct = async (data, dbTransaction) => {
	try {
		await Product.create(data, { transaction: dbTransaction })
	}
	catch(err) {
		throw err
	}
}

exports.findAllProducts = async () => {
	try {
		const result = await Product.findAll()
		return JSON.parse(JSON.stringify(result))
	}
	catch(err) {
		throw err
	}
}

exports.findOneProduct = async ({ id, name }) => {
	try {
		const result = await Product.findAll({
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