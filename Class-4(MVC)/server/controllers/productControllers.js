const ProductModel = require('../models/product.js')

// Post, create A product
exports.createProduct = async (req , res)=>{
  let course =  await  ProductModel.create({
        product_name : req.body.product_name,
        product_price : req.body.product_price,
        isInStock : req.body.isInStock,
        ratings : req.body.ratings
    })

    res.send(course)
}

