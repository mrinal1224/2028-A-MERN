const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose
  .connect(dbUrl)
  .then(() => {
    console.log("Db Connected");
  })
  .catch((err) => {
    console.log(err);
  });

// Course Schema

let courseSchema = new mongoose.Schema({
  course_name: {
    type: String,
    required: true,
  },

  instructor: {
    type: String,
    required: true,
  },

  ratings: {
    type: Number,
  },

  isLive: {
    type: Boolean,
    required: true,
  },
});

const CourseModel = mongoose.model("courses", courseSchema);

app.get("/", (req, res) => {
  res.send("Message from the Server");
});

// Get a course
app.post("/courses", async (req, res) => {
  let course = await CourseModel.create({
    course_name: req.body.course_name,
    instructor: req.body.instructor,
    ratings: req.body.ratings,
    isLive: req.body.isLive,
  });

  res.send(course);
});

// Put , Get , and delete

app.listen(8081, () => {
  console.log("Server Started");
});
