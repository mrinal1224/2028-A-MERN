const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  user_name: {
    type: String,
    required: true,
  },

   email: {
    type: String,
    required: true,
  },

  password: {
    type: text,
    required: true,
  },

  Phone: {
    type: Number,
  },
});

let UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel