const express = require("express");

const app = express();
app.use(express.json())


const courses = [
  { course_id: 1, name: "Java", instructor: "Piyush" },
  { course_id: 2, name: "JavaScript", instructor: "Shiva" },
  { course_id: 3, name: "DBMS", instructor: "Tejas" },
];

// Read
app.get("/", (req, res) => {
  res.send("This is my Server");
});
// To get All courses
app.get("/courses", (req, res) => {
  // All the Courses
  res.status(200).send(courses)
});

// to get a single course based on name or id
app.get("/courses/:id", (req, res) => {
  // All the Courses
  console.log(req.params); // {id : 2}
  let course = courses.find((course) => course.course_id === parseInt(req.params.id));
  
  if(!course){
     res.status(404).send('Course does not exist')
  }
  res.status(200).send(course)
});

// Create
app.post('/courses' , (req , res)=>{
      let course = {
        course_id:req.body.course_id,
        name : req.body.name,
        instructor : req.body.instructor
      }
      courses.push(course)

      res.status(201).send('Course created')
})

// // update
app.put('/courses/:id' , (req , res)=>{
let course = courses.find((course) => course.course_id === parseInt(req.params.id));
  
  if(!course){
     res.status(404).send('Course does not exist')
  }

  course.instructor = req.body.instructor
  res.status(200).send(course)
})

// // delete
// app.delete()

app.listen(8080, () => {
  console.log("Server Started at port 8080 ");
});
