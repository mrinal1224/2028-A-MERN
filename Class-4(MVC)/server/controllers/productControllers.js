const ProductModel = require('../models/product.js')

// get All products

exports.getAllProducts = async(req , res)=>{

}



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

// updateProduct 

exports.updateProduct = async (req , res)=>{
  
}




exports.deleteProduct = async (req , res)=>{
  
}

