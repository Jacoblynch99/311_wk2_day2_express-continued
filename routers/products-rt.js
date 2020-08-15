const express = require('express')
const router = express.Router()
const productController = require('../controllers/products-ctr')

router.post('/products', productController.createProduct)
router.post('/products/:id', productController.createProductReview)
router.get('/products', productController.retrieveAllProducts)
router.get('/products/:id', productController.retrieveOneProduct)
router.put('/products/:id', productController.updateProduct)
router.put('/products/:id/reviews/:number', productController.updateProductReview)
router.delete('/products/:id', productController.deleteProduct)
router.delete('/products/:id/reviews/:number', productController.deleteProductReview)


module.exports = router