// CRUD

const fs = require("fs");

console.log("start");

// ReadFile
let data = fs.readFileSync("f1.txt");
console.log("This is file 1 Data-> " + data);

fs.readFile("f2.txt", function (err, data) {
  if (err) {
    console.error(err);
  }

  console.log("This is file 2 Data-> " + data);
});

console.log("End");


// update

// fs.appendFile , fs.appendFileSync

// write methods

fs.writeFileSync('f4.txt' , 'I am f4 data')


fs.writeFile('f5.txt' , 'I am f5 data' , function(err , data){
    console.log('File Written')
})

// fs.writeFileSync , fs.writeFile

// delete 

// fs.unlinkSync 
// fs.unlink