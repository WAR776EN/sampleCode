const { 
  createProduct,
  findAllProducts,
  findOneProduct
} = require('../services/product')

const { 
  validateProduct
} = require('../validations/products')

const models = require('../models')

module.exports = {
  async createProduct(req, res, next) {
    const dbTransaction = await models.sequelize.transaction()
    try {
      validateProduct(req.body)
      const createdData = await createProduct(req.body, dbTransaction)
      await dbTransaction.commit()

      res.status(200).json({
        success: true,
        messag: 'create product success',
        data: createdData
      })
    }
    catch(err) {
      await dbTransaction.rollback()
      console.log(err)
      next(err)
    }
  },
  async getAllProducts(req, res, next) {
    try {
      const queryResult = await findAllProducts()
      res.status(200).json({
        success: true,
        message: 'success get all products',
        data: queryResult
      })
    }
    catch(err) {
      next(err)
    }
  },
  async gerProductById(req, res, next) {
    try {
      const { id } = req.params
      const queryResult = await findOneProduct({ id })
      res.status(200).json({
        success: true,
        message: 'success get product',
        data: queryResult
      })
    }
    catch(err) {
      next(err)
    }
  }
}