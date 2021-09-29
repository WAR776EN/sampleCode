const { 
  createProduct,
  findAllProducts,
  findOneProduct
} = require('../services/product')

const { 
  validateProduct
} = require('../validations/products')

module.exports = {
  async createProduct(req, res, next) {
    try {
      validateProduct(req.body)
    }
    catch(err) {
      console.log(err)
      next(err)
    }
  }
}