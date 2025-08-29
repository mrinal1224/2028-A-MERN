const express = require('express')
require('dotenv').config()
const {connectDB} = require('./dbConfig')


const app = express()
connectDB(process.env.dbUrl)

app.get('/' , (req , res)=>{
    res.send('Hello from the Server')
})


app.listen(8081 , ()=>{
    console.log(`Server Started`)
})