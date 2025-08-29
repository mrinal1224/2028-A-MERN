const express = require('express')
require('dotenv').config()
const {connectDB} = require('./dbConfig')
const productRoutes = require('./routes/productRoutes.js')
const userRoutes = require('./routes/userRoutes.js')

const app = express()
connectDB(process.env.dbUrl)
app.use(express.json())
app.use('/products' , productRoutes)
app.use('/users' , productRoutes)


app.get('/' , (req , res)=>{
    res.send('Hello from the Server')
})


app.listen(8081 , ()=>{
    console.log(`Server Started`)
})