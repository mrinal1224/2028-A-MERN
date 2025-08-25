const express = require("express");

const app = express();

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
  res.send(courses);
});

// to get a single course based on name or id
app.get("/courses/:id", (req, res) => {
  // All the Courses
  console.log(req.params); // {id : 2}
  let course = courses.find((course) => course.course_id === parseInt(req.params.id));

  res.send(course);
});

// Create
// app.post()

// // update
// app.put()

// // delete
// app.delete()

app.listen(8080, () => {
  console.log("Server Started at port 8080 ");
});
