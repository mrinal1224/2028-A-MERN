const ProductModel = require("../models/product.js");
const express = require('express')
const {createProduct , updateProduct ,deleteProduct , getAllProducts} = require('../controllers/productControllers.js')

const router = express.Router()


router.get('/' , getAllUsers)

router.post('/' , createUser)

router.put('/:id', updateUser)

router.delete('/:id', deleteUser)




module.exports = router