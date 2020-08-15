let products = require('../data/products')
let counter = products.length + 1

const createProduct = (req, res) => {
  if (products) {
    products.push({_id: counter++, ...req.body})
    res.json(products[products.length - 1])
  } else {
      res.status(400).json({ message: `Error has occured, try looking at pictures of puppies and then try again later`})
  }
}

const createProductReview = (req, res) => {
  let foundProduct = products.filter(products => products._id === parseInt(req.params.id))
  let productReview = foundProduct[0].reviews
  if (foundProduct) {
    productReview.push(req.body)
    res.json(foundProduct)
  } else {
    res.status(400).json({ message: `Error has occured, try looking at pictures of puppies and then try again later`})
  }
}

const retrieveAllProducts = (req, res) => {
  if (products) {
    res.json(products)
  } else {
    res.status(400).json({ message: `Error has occured, try looking at pictures of puppies and then try again later`})
  }
  
}

const retrieveOneProduct = (req, res) => {
  if (req.params.id) {
    res.json(products.filter(products => products._id === parseInt(req.params.id)))
  } else {
    res.status(400).json({ message: `Error has occured, try looking at pictures of puppies and then try again later`})
  }
}

const updateProduct = (req, res) => {
  let foundProduct = products.filter(products => products._id === parseInt(req.params.id))
  let product = foundProduct[0]
  if (product) {
    product.name = req.body.name ? req.body.name : product.name
    product.description = req.body.description ? req.body.description : product.description
    product.rating = req.body.rating ? req.body.rating : product.rating
    product.imgUrl = req.body.imgUrl ? req.body.imgUrl : product.imgUrl
    product.price = req.body.price ? req.body.price : product.price
    product.category = req.body.category ? req.body.category : product.category
    product.reviews = req.body.reviews ? req.body.reviews : product.reviews
    res.json(product)
  } else {
    res.status(400).json({ message: `Error has occured, try looking at pictures of puppies and then try again later`})
  }
}

const updateProductReview = (req, res) => {
  let foundProduct = products.filter(products => products._id === parseInt(req.params.id))
  let index = parseInt(req.params.number) - 1
  let productReview = foundProduct[0].reviews[parseInt(index)]
  if (productReview) {
    productReview.description = req.body.description ? req.body.description :  productReview.description
    res.json(foundProduct)
  } else {
    res.status(400).json({ message: `No review with the id of ${req.params.number}`})
  }
}

const deleteProduct = (req, res) => {
  let foundProduct = products.filter(products => products._id === parseInt(req.params.id))
  let product = foundProduct[0]
  if (product) {
    product.isActive = false
    res.send("The product is gone with the wind")
  } else {
    res.status(400).json({ message: `No member with the id of ${req.params.id}`})
  }
}

const deleteProductReview = (req, res) => {
  let foundProduct = products.filter(products => products._id === parseInt(req.params.id))
  let index = parseInt(req.params.number) - 1
  let productReview = foundProduct[0].reviews[parseInt(index)]
  if (productReview) {
    productReview.isActive = false
    res.send("The review has been silenced")
  } else {
    res.status(400).json({ message: `No review with the id of ${req.params.number}`})
  }
}

module.exports = {
  createProduct,
  createProductReview,
  retrieveAllProducts,
  retrieveOneProduct,
  updateProduct,
  updateProductReview,
  deleteProduct,
  deleteProductReview
}