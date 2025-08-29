const ProductModel = require("../models/product.js");
const express = require('express')
const {createProduct} = require('../controllers/productControllers.js')

const router = express.Router()


router.get('/' , (req , res)=>{

})

router.post('/' , createProduct)

router.put('/:id', (req,res)=>{

})


module.exports = router