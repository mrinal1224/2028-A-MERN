const express = require("express");

const app = express();

// Read
app.get('/' , (req , res)=>{
    res.send('This is my Server')
})

// Create
// app.post()

// // update 
// app.put()

// // delete
// app.delete()

app.listen(8080, () => {
  console.log("Server Started at port 8080 ");
});
