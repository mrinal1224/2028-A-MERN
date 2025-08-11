const http = require('http')

const myServer = http.createServer((req , res)=>{
  console.log('Req made')
  console.log(req)
  res.end('This is my Server')
})


myServer.listen(8001 , ()=>{
    console.log('Server Started')
})