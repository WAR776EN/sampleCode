const express = require('express')
const router = express.Router()

const { 
    createProduct,
    getAllProducts,
    gerProductById
} = require('../controllers/product')

router.get('/products', getAllProducts)

router.post('/product', createProduct)
router.get('/product/:id', gerProductById)

module.exports = router