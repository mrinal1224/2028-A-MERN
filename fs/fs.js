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
