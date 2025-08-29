const ProductModel = require("../models/product.js");
const express = require('express')
const {createProduct , updateProduct ,deleteProduct , getAllProducts} = require('../controllers/productControllers.js')

const router = express.Router()


router.get('/' , getAllProducts)

router.post('/' , createProduct)

router.put('/:id', updateProduct)

router.delete('/:id', deleteProduct)




module.exports = router